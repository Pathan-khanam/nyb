function arrayAvg(arr){
    if(arr.length === 0){
        return 0;
    }
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    let avrage = sum/arr.length;
    return Math.round(avrage*100)/100;
}
console.log(arrayAvg([]));
console.log(arrayAvg([10,19]))



