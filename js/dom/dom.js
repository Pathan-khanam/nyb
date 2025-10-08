// // console.log("pathan!")
// // alert("khan")
// // confirm("Are you sure")
// // prompt("Enter your name")


// console.log(this)
// console.log(window.document)
// console.dir(document)
// console.dir(document.childNodes[1].childNodes[2].childNodes[5])


// document.childNodes[1].childNodes[2].childNodes[5].innerText="good morning pathan"
// console.dir(document.childNodes[1].childNodes[2].childNodes[5].innerText)


// document.getElementById('click').style.color ='red'

// var a = document.getElementById('click')

// a.style.backgroundColor= 'green' 

// console.log(a)


// var b = document.getElementsByClassName('heading4')


// console.log(b)

// var c= document.getElementsByTagName('h4')

// c.innerText="red"

// console.log(c)


// var elemt = document.createElement('h2')
// elemt.innerText="web techno"

// document.body.appendChild(elemt)

// console.log(elemt)

// var h =document.querySelectorAll('hdng2')
// var x=document.querySelector('h3')
// console.log(h)
// console.log(x)

// var parent = div2.parentElement;
// parent.style.backgroundColor= "aqua";
// console.log(parent)


// //children

// var children = div2.children;
// console.log(children)

// //firstelementchild

// var firstelement = div2.firstElementChild;
// console.log(firstelement)

// //lastelementchild

// var lastelement = div2.lastElementChild;
// console.log(lastelement)


// //sibling
// //previouselementsibling

// var presibling = div2.previousElementSibling;
// console.log(presibling)

// //nextelementsilbling

// var nxtsilbling = div2.nextElementSibling;
// console.log(nxtsilbling)


// //createelement

// var newelement = document.createElement('h2')
// newelement.textContent= "this is pathan"
// newelement.setAttribute('id','newelement')
// newelement.setAttribute('class','newelement')
// div2.appendChild(newelement)



// var h1 = document.createElement('h1')
// h1.textContent= "good afternoon"


// var h1=document.createElement('h1')
// h1.textContent = 'this a new heading tag'
// console.log(h1)


// var div1=document.getElementById('div1')
// div1.appendChild(h1)

// var p= div1.firstElementChild
// console.log(p)

// div1.insertBefore(h1,p)


// var first = document.getElementById('first');
// div1.replaceChild(h1, first)

// div2.addEventListener("click",function (){
//     alert('this a alert msg')
// })



//root node
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

//children
console.log(document.body.childNodes)
console.log(document.head.childNodes)
console.log(document.body.firstChild)
console.log(document.body.lastChild)

//traversing for-of loop
for(node of document.body.children){
    console.log(document.body.children)
}


//array 
const childrensofBody = Array.from(document.body.children)
console.log(childrensofBody)