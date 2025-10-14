function findMax(arr){
    if(arr.length === 0)
        return "array is empty";

    let max =arr[0];
    for (let i=1;i<arr.lenthg;i++){
    if(arr[i]>max)
{
    max=arr[i];
}
    }
    return max;
}
console.log(findMax([10,46,80]));
