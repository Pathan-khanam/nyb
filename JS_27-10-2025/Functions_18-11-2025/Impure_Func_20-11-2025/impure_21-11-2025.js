//output cannot be guessed
//it doesnot give the same output for the same input 
function random(){
    var names=["arun","zoya","khan","sara","liya"]

    var randomIndex=Math.floor(Math.random()*names.length)
    return names[randomIndex]
}
console.log(random())




function randomNumber(min,max){
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

function randomName(namesArray){
    var index=Math.floor(Math.random()*namesArray.length);
    return namesArray[index]
}
function inner1(){
    var num=randomNumber(1,100)
    var names=["Arun","Zoya","khan","Ravi","Ali","pathan"]
    var name=randomName(names)
    console.log("Inner1 -> Number:", num,"| Name:",name);
    return{
        num, name
    }
}
    function inner2(){
        var num=randomNumber(101,200)
        var names= ["Sara","Imran","Liya","John","bob"]
        var name=randomName(names)
        console.log("Inner2 -> Number:", num, "| Name:", name)
        return {
            num,name
        }
    }
        function inner3(){
            var num= randomNumber(201,300)
            var names=["Lina","Riya","Bunny","Saad","Mayana"]
            var name=randomName(names)
            console.log("Inner3 -> Number:", num, "| Name:", name)
            return {
                num,name
            }
        }
            function inner4(){
                var num=randomNumber(301,400)
                var names=["Amaira","Tanya","Ash","Noor","Karan"]
                var name=randomName(names)
                console.log("Inner4 -> Number:", num,"| Name:", name)
                return {
                    num,name
                }
            }
                function inner5(){
                    var num=randomNumber(401,500)
                    var names=["Srk","Ameer","Hania","Dananeer","Hanf"]
                    var name=randomName(names)
                    console.log("Inner5 -> Number:", num,"| Name:", name)
                    return {
                        num,name
                    }
                }
                    function inner6(){
                        var num=randomNumber(501,600)
                        var names=["Anaya","Veda","Akshu","Zyan","Imaan"]
                        var name=randomName(names)
                        console.log("Inner6 -> Number:", num,"| Name:", name)
                        return {
                            num,name
                        }
                    }
                        function inner7(){
                            var num=randomNumber(601-700)
                            var names=["Simran","Zara","Aliya","Aain","Aana"]
                            var name=randomName(names)
                            console.log("Inner7 -> Number:", num,"| Name:", name)
                            return{
                                num,name
                            }
                        }
                            function inner8(){
                                var num= randomNumber(701-800)
                                var names=["Kiki","Banu","Zoya","Iqra","Zainab"]
                                var name=randomName(names)
                                console.log("Inner8 -> Number:", num,"| Name:", name)
                                return {
                                    num,name
                                }
                            }
                            

var result1 = inner1();
var result2= inner2();
var result3= inner3();
var result4=inner4();
var result5=inner5();
var result6=inner6();
var result7=inner7();
var result8=inner8();


console.log("\nFinal Results:")
console.log(result1, result2, result3, result4, result5, result6, result7, result8)