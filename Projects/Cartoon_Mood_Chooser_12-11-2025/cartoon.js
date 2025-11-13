function showCartoon(){
    const mood=document.getElementById("moodSelect").value;
    const msg=document.getElementById('msg');
    const img=document.getElementById('cartoonImage');
    const quote=document.getElementById('quote');

    //rest
    img.classList.remove('show',"blush");
    quote.classList.remove('show');
    document.body.className="";
    document.body.style.background='linear-gradient(to right,#89f7fe,#66a6ff)';
    msg.innerHTML="";
    quote.innerHTML="";
    img.src="";

    //condition logic
    if(mood === ''){
        msg.innerHTML="⚠️ Please select a mood!";
        msg.style.color="red";
    }
    else if(mood === "happy"){
        msg.innerHTML='😁 SpongeBob is happy like you!';
        msg.style.color='#ff9800';
        img.src='https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png';
        img.classList.add("blush");
        document.body.classList.add('bg-animate');
        document.body.style.background="liner-gradient(-45deg,#ff9a9e,#fad0c4,#fbc2eb,#a6c1ee)";
        quote.innerHTML='🌞Keep smiling! Your joy is contagious and brightens the world around you!';
    }
    else if(mood === "sad"){
        msg.innerHTML="😥 Pooh feels the same sadness.";
        msg.style.color='#2196f3';
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTij4tWInWd0MqkacT3dUBS7b-FL0hD5YZQKw&s';
        document.body.classList.add("bg-animate");
        document.body.style.background='linear-gradient(-45deg,#83a4d4,#b6fbff,#a1c4fd,#c2e9fb)';

    }
    else if(mood === "angry"){
        msg.innerHTML="😡 Hulk Smash! Take a deep breath 💚";
        msg.style.color="#e53935";
        img.src="https://rukminim2.flixcart.com/image/480/640/xif0q/poster/d/c/b/medium-hulk-angry-smash-wall-poster-with-frame-a3-size-original-imagxanyfydh4qz8.jpeg?q=20";
        document.body.classList.add('bg-animate');
        document.body.style.background="linear-gradient(-45deg,#cb2d3e,#ef473a,#ff6a00,#ee0979)";

    }
    else if(mood === "sleepy"){
        msg.innerHTML="😴 Snorlax says... time for nap!";
        msg.style.color='#6a1b9a';
        img.src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/pokemon-sleep-green-snorlax-guide-how-to-catch.jpg?w=1600&h=900&fit=crop";
        document.body.classList.add("bg-animate");
        document.body.style.background='linear-gradient(-45deg,#b993d6,#8ca6db,#9face6,#74ebd5)';
    }
    else if(mood === "excited"){
        msg.innerHTML='🤩 Pikachu is bursting with energy!';
        msg.style.color="#ffeb3b";
        img.src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/pokemon-pikachu-anime-happy.jpg";
        document.body.classList.add("bg-animate");
        document.body.style.background="linear-gradient(-45deg,#f791e,#ffd200,#f6d365,#fda085)";

    }
    else if(mood === "confident"){
        msg.innerHTML="😎 cool eevee feels confident and unstoppable!";
        msg.style.color="#00c853";
        img.src="https://videogames.si.com/.image/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/MTk0NzgxNzk2MDExODc3NTM4/pokemon-eevee-1.jpg";
        img.classList.add("blush");
        document.body.classList.add("bg-animate");
        document.body.style.background="linear-gradient(-45deg,#43cea2,#185a9d,#2b5876,#4e4376)";
        quote.innerHTML="💪 confidence is your superpower! Believe in yourself!";
    }
    else if(mood === "smile"){
        msg.innerHTML="😊 Mickey Mouse is here to keep you smiling!";
        msg.style.color="#ffb74d";
        img.src="https://www.parents.com/thmb/5FsaDp5FRCnDRXixCSPPlEXYKWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-Mickey-Mouse-Clubhouse-Mickey-Mouse-0c6a0705cec8454aa6407229ab9f45a8.jpg" ;
        img.classList.add("blush");
        document.body.classList.add("bg-animate")
        document.body.style.background="linear-gradient(-45deg, #fceabb,#f8b500,#ffdd00,#ffe29f)";
        quote.innerHTML="🌟 Smile bright! Happiness is the best accessory!";
    }
    //show cartoon animation
    if(img.src !== ""){
        setTimeout(() => img.classList.add("show"), 100);//100 ms = 0.1 sec
    }
    //show quote animation
    if(quote.innerHTML !== ""){
        setTimeout(() => quote.classList.add("show"), 500);//500ms=0.5 sec

    }
}