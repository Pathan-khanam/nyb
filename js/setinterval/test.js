// setInterval(() => {
//     console.log('hello khan')
   
// }, 2000);



// let test=1;
// let hi = setInterval(() => {
//     console.log("running...", ++test);
//     if (test=== 5){
//         clearInterval(hi);
//     }
// },1000)



// let secs=10;
// let timer=setInterval(()=> {
//     console.log("remaing:",secs--);
//     if(secs <0){
//         clearInterval(timer);
//         console.log("times up!");
//     }
// },1000);


// function showMessage(msg){
//     console.log(msg);
// }
// setInterval(showMessage,3000,'hello pathan');

// //digital clock using setinterval

// setInterval(() => {
//     let now = new Date();
//     console.log(now.toLocaleDateString());
// },1000);



// multiple image silder

// let images = [
//    'https://imgcdn.stablediffusionweb.com/2024/12/19/71d08cda-b228-4683-a3c4-421a2f207432.jpg' ,
//     'https://i.pinimg.com/736x/b4/75/ab/b475ab2905ceed94642b82a50c173dee.jpg',
//     'https://i.pinimg.com/474x/d8/73/52/d87352d34c5ec61c336f4566a5ee526f.jpg'
// ]
// let index=0;

// setInterval(() => {
//     document.getElementById("slider").src= images[index];
//     index= (index+1) % images.length;

// },2000);

// let tst=0;
// let hi=setInterval(() => {
//     console.log("hi", ++tst)
//     if(tst>5){
//         console.log(tst)
//         clearInterval(hi)
//     }
   
// },1000);


// setTimeout(() => {
// clearInterval(tst)
// },6000);



let post=0;
let box= document.getElementById("box")

    let intervalId= setInterval(() => {
        if(post>=30){
            clearInterval(intervalId);
        } else{
            post++;
            box.stytle.left=post+ "px";
        }
    },10);
