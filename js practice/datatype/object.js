let person={
    name:"khan",
    age:20,
    id:456,
    job:"tester",
    start:function (){
        console.log("started")

    }

}
console.log(person["age"])

person.city="bnglr";

console.log(person)

person.job="developer";

console.log(person)

delete person.id;
console.log(person)
person.start();

let details={
    nmae:"sara",
    marks:{
        english:90,
        math:50,
        hindi:60
    }
}
console.log(details.marks.hindi)
console.log(details.marks["english"])
//loop through objects
let book={
    title:"js basics",
    author:"john",
    year:2024
}
for(let key in book){
    console.log(key+":"+ book[key]);
}
//create object student with name,age,grade.print all values
let student={
    name:'sara',
    age: 20,
    grade:"A"
}
console.log(student["name"])
  console.log(student.age)
  console.log(student.grade)
  console.log(student.name,student.age,student.grade)
  //add update
  student.city="bnglr"
  student.grade="A+"
  console.log(student)

//calculator with two numbers and a method to add them
  let calculator={
    num1:40,
    num2:10,
    add:function(){
        return this.num1+this.num2;
    }
  }
  console.log(calculator.add())



  //nested object
  let user={
    name:"ali",
    profile:{
        email:"ali@gmail.com",
        phone:"9028976543"
    }
  }
  console.log(user.profile.email)


  for(let key in user){
    console.log(key+":"+user[key]);
  }
//object.keys
  let keys=Object.keys(person);
  console.log(keys)

  for(let key of keys){
    console.log(key);
  }
  //object values
  let values=Object.values(person)
  console.log(values)

  //object.entries
  for(let [key,value] of Object.entries(person)){
    console.log(`${key}= ${value}`);
  }

  //for..in loops
  let car={
    brand:"BMW",
    model:"civic",
    year:2025
  }
  for (let hello in car){
    console.log(hello+":"+car[hello]);
  }

  //count object properties
  let makeūp={
    brand:"lakme",
    expiry:2025,
    shade:"medium"
  }
//   let count=0;
//   for(let key in makeūp){
//     count++;

//   }
//   console.log("Total properties:",count);

 console.log(Object.keys(makeūp).length)
  
 console.log(Object.values(book))


 let fruit={
    name:"strawberry",
    color:"red",
    taste:"sweet & sour"
 }
 for (let taste in fruit){
    console.log(taste.toUpperCase())

 }
 

let Car={
    brand:"bmw",
    model:"civics",
    year:2025
}

 console.log(`My Car is a ${Car.year}, ${Car.brand},${Car.model}`);

