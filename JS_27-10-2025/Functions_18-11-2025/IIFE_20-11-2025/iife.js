//a function that runs automatically as soon as it is created

//syntax:-(function (){ //code })();
//wrapped in( )-> becomes an expression
//Ends with ()-> immediately invoked
//to create a private scope variables inside IIFE cannot be accessed outside 

(function () {
    let x=30;
    console.log(x);

})()
//console.log(x);





function greet(){
    var a="sara";
    function gudmrng(){
        console.log("GM " + a)
    }
    var b="khan"
    function gudaftrnn(){
        console.log("GA "+ b)
    }
    var c="pathan"
    function gudevng(){
        console.log("GE "+c)
    }
    var d="sehar"
    function gudnyt(){
        console.log("GN "+ d)
    }
    var e=a + b+ c+ d
    function Gudbye(){
        console.log("GB "+ e)
       return "done"
    }
    gudmrng()
    gudaftrnn()
    gudevng()
    gudnyt()
    Gudbye()
}
greet()


