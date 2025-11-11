const planetColors=["pink",'olive','Lavender','yellow','orange','gray','blue','indigo','violet','red','#99FF33','#CC33FF','#FF66CC','#33CCFF']
const creatureEmojis=['🦄','🐉','🐳','🦖','🐸','🐥']//,'🦁','🐯','🦓','🦍','🐪','🦧']
const planetMap=new Map();//visible planets
const creatureWeakMap= new WeakMap();//hidden creature data

const galaxy=document.getElementById('galaxy')
const sun=document.querySelector('.sun')

const centerX=window.innerWidth/2;
const centerY=window.innerHeight/2;
const orbitRadiusBase=100;

//create 12 planets
planetColors.forEach((color,index)=>{
    const planet=document.createElement('div');
    planet.className='planet';
    planet.style.background=color;
    galaxy.appendChild(planet);
   

    const radius=100+ index*30;
    const angle=Math.random()*360;

     planetMap.set(index,{element:planet, radius,angle});

   //assign 6 creatures to each planet
   const auracolor=`hsl(${Math.random()*360},70%,60%)`;
   creatureWeakMap.set(planet,{
    creatures:creatureEmojis.map(c=>c),//6 creatures
    aura:auracolor,
    elements:[]
   })
   addCreaturesToPlanet(planet);
})

//functionality to add creatures to a planet
function addCreaturesToPlanet(planet){
    const data = creatureWeakMap.get(planet);
    data.creatures.forEach((emoji,i) =>  {
        const c=document.createElement('div')
        c.className="creature";
        c.style.animationDelay=`${i*0.5}s`
        c.textContent=emoji;
        c.style.filter=`drop-shadow(0 0 5px ${data.aura})`;
        planet.appendChild(c)
        data.elements.push(c)
        //creature click triggers moving behavior
        c.addEventListener("click", ()=> moveCreature(c,planet));

    })
    }
    //animate planets around the sun
    function animatePlanets(){
        planetMap.forEach(data=>{
            data.angle+=0.3;//speed
            const rad=data.angle*Math.PI/180;
            data.element.style.left=`${centerX+data.radius*Math.cos(rad)}px`;
            data.element.style.top=`${centerY+data.radius*Math.sin(rad)}px`;
            //animate creature around planet
            const creatureData=creatureWeakMap.get(data.element);
            creatureData.creatures.forEach((c,idx)=>{
                const el=data.element.children[idx];
                const cRad=(idx*60+performance.now()/50)*Math.PI/180;
            const orbitDist=30;
        el.style.transfrom=`translate(${orbitDist*Math.cos(cRad)}px,${orbitDist*Math.sin(cRad)}px)`;
        el.style.filter=`drop-shadow(0 0 5px ${creatureData.aura})`;

            })
        })
        requestAnimationFrame(animatePlanets)
    }
    //move creature to another random planet after afew seconds
    function moveCreature(creature,currentPlanet){
        const planetKeys=Array.from(planetMap.keys());
        if(planetKeys.length<=1)return;

        //pick a random planet other than current 
        let newPlanetIndex;
        do{
            newPlanetIndex=planetKeys[Math.floor(Math.random()*planetKeys.length)];
        }while(planetMap.get(newPlanetIndex)=== currentPlanet);

        const newPlanet=planetMap.get(newPlanetIndex);
        currentPlanet.removeChild(creature);
        newPlanet.appendChild(creature);

        const oldData=creatureWeakMap.get(currentPlanet);
        let movingCreature=oldData.creatures.pop();
        const newData=creatureWeakMap.get(newPlanet);
        newData.creatures.push(movingCreature);


        //repeat movement after 3 seconds
        setTimeout(() =>moveCreature(creature,newPlanet) ,3000);
    }
    //start animation
    animatePlanets();

