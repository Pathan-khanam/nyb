//to store data
sessionStorage.setItem("user",'khan')
sessionStorage.setItem("company","nyb");

//to get
let user= sessionStorage.getItem("user")
console.log(user)
console.log(sessionStorage.getItem("company"))


//to remove
sessionStorage.removeItem(user);


var emp = {
    name: 'pathan',
    role: 'tester',
    id: '537'

}
//storage object
sessionStorage.setItem('emp', JSON.stringify(emp));

//retrieve object

let storedUser= JSON.parse(sessionStorage.getItem("emp"));
console.log(storedUser.role);

//session storage changes do not trigger storage events across tabs

window.addEventListener("storage", function(event){
    console.log("storage event detected");
    console.log("key:", event.key);
    console.log("old value:", event.oldValue);
    console.log("new vale:", event.newValue);
    console.log("storage area:",event.storageArea);

});

