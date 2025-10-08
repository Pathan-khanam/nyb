function calculator(a,b,operator){
    if (operator === "+"){
        return a+b;
    }else if(operator === "-"){
        return a-b;
    }else if(operator === "*"){
        return a*b;
    }else if(operator === "/"){
        // if(b=== 0){
        //     return"Division by Zero";
        // }
        // return a/b;
    // }else if(operator === "%"){
    //     return a%b;
     return b==0 ? "Division by Zero" : a/b;
    }else{
        return "Invalid Operator";
    }
}

console.log(calculator(10,9,"+"));
console.log(calculator(20,6,"-"));
console.log(calculator(50,60,"*"));
console.log(calculator(10,0,"/"));
console.log(calculator(8,2 ,"%"));




function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
            case "-":
                return a-b;
                case "*":
                    return a*b;
                    case "/":
                        return b==0 ? "Division by Zero" : a/b;
                        default:
                            return "Invalid Operation";
                        
    }
}

console.log(calculator(10,9,"+"));
console.log(calculator(20,6,"-"));
console.log(calculator(50,60,"*"));
console.log(calculator(10,0,"/"));
console.log(calculator(8,2 ,"%"));