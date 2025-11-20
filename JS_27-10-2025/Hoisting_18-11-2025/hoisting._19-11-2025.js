Npattern(10);//calling before declaration

function Npattern(n){  // function declaration is fully hoisted 

    for(var i=1;i<=n;i++){  //var is hoisted
        var line ="";

        for(var j=1;j<=n; j++){
            
            //print left ,   diagonal,   right
                if(j === 1 || j === n || j=== i){

                    line += "*";// print stars
            }  else{
                line += " "; //space for alignment

            }
        }
         console.log(line);
    }
}


numbers(20)

function numbers(n){

    for(var i=1; i<=n; i++){
        var line= "";

        for(var j=1; j <= n; j++){

            if(j===1 || j === n || j===i){
                line += j.toString().padEnd(3," ");

            }else{
                line+="  ";
            }
        }
        console.log(line);
    }
}


validateUser("user123")
function validateUser(username){
    console.log("validating", username)
}


//var is hoisted but initialized as undefined

function total(){
    console.log(value);//undefined (not error)

    var value=500;
    console.log(value);

}
total();



//let before declaring causes reference error (TDZ)


function order(){
   // console.log(orderId);//reference error (tdz)
    let orderId=12345;
    console.log(orderId);
}
order()


let user ="khan"
{
    let user="hello";
    console.log("Inside Block:",user)

}
console.log("Outside block:", user)


let count=1;
count=3;
console.log(count)//overwrite old one 

