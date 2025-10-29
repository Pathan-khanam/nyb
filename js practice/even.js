let num= 7;
if(num%2 === 0){
    console.log(num+ "is even");

}else {
    console.log(num + "is odd");
}


let evensum=0;
for(let i=0;i<=20;i++){
    if(i%2 === 0)evensum +=i;
}
console.log("Even sum=" , evensum );


//nested ternary operatorsyntax : condition1 ? value1: (condition2? value2: value3)


function calculateGrade(marks){
    return (marks>=90)? "A pass": 
            (marks>=70)? "B":
            (marks>=50)? "C":
            "Fails";
}
console.log(calculateGrade(95));
console.log(calculateGrade(45));
console.log()



