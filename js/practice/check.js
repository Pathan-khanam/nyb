function check(num){
    if(typeof num !== 'number' || isNaN(num)){
        return "Invalid";
    }else if(num>0){
        return "positive";
    }else if(num<0){
        return "negitive";
    }else{
        return "zero";
    }

}
console.log(check(70));
console.log(check(-20));
console.log(check(0));
console.log(check("abc"));
console.log(check(NaN));
console.log(check(true));




