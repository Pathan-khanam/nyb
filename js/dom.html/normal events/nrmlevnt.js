var div= document.getElementById('performance')

var n=0;
var t=0;
var d=0;
 var throttle=true;
 var debounce=true;
var normal= document.getElementById('n')
var throttling= document.getElementById('t')
var debouncing=document.getElementById('d')

function normalEvent() {

     n++;
    normal.innerText= `normalcount : ${n}`
}

function throttlingEvent(){

    if(throttle= true){
        throttle= false 
   
    t++
    throttling.innerText= `throttlingcount : ${t}`
    }
setTimeout(() => {
        throttle= true
 }, 3000);
}

function debouncingEvent (){
 
 window.clearTimeout(debounce)
   var debounce= window.setTimeout(() => {
    //    if(debounce== true){
    //     debounce= false
    d++
    debouncing.innerText=`debouncingcount: ${d}`
    
        // debounce=true
    }, 4000);

}


div.addEventListener("click", () => {
    normalEvent()
    throttlingEvent()
    debouncingEvent()


})







//normal event fires continuously without restrictions.
// example(keyup)

document.getElementById("normal").addEventListener("keyup", function () {
    console.log("Normal Event Fired:",this.value);
});


//debouncing  only after certain delay.
//example search box

function hi(func,delay){

let timer;
return function(...args){
clearTimeout(timer)
var timer= setTimeout(() => 
    func.apply(this,args),delay);

};
}

function fetchData (query){
    console.log("API call for:", query)


} 

var debouncedFetch = hi(fetchData,500);
document.getElementById("search").addEventListener("keyup", function(){
    debouncedFetch(this.value);

});


//throttling ensures after certain delay.
//example scroll or resize 


function test(func, limit){

    let inThrottle;
    return function(...args){
        if(!inThrottle){
            func.apply(this,args);
            inThrottle=true;
            setTimeout(() => inThrottle=false, limit);

        }
    };
}

function logScroll(){
    document.getElementById("output").textContent=
    "Scroll event fired:"+ new Date().toLocaleTimeString();
}

window.addEventListener("scroll", test(logScroll,500));

