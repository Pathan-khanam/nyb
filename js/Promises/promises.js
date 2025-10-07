function getData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    })
}
getData().then(result => console.log(result));