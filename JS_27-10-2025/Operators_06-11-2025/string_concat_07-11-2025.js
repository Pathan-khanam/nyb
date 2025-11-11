// string concatination
var firstName = "pathan";
var lastName = "khan";

var fullName = firstName + " " + lastName;
console.log(fullName);

var ag = 10;
var msg = "I am " + ag + " years old.";
console.log(msg);

//old way vs new way multiline concatenation

var txt="Hello"+
         "World"+
         'From JS';
         console.log(txt)
//new way
var text=`Hello
World
From JS`;
          console.log(text)