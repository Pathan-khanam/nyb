var food = "   pizza     "
var  items ='pizza, cheesse bun,taco bell, cheesse burrito'

console.log(items.length)


console.log(food.toUpperCase())
console.log(food.trim())

console.log(items.trimStart())
console.log(items.trimEnd())

console.log(items.slice(0,5))

console.log(items.slice(-7))

console.log(items.slice(11,items.length))

console.log(items.substring(6,items.length))

console.log(items.substr(6,items.length))


console.log(items.indexOf('e'))
console.log(items.lastIndexOf('e'))


console.log(items.replace(' bun',' pasta'))


console.log(items.charAt(7))


console.log(items.charCodeAt(7))


var b='pathan'
console.log(b.repeat(3))
x=""
for(i=0; i<5; i++){
x += b
}
console.log(x)

console.log(items.startsWith('pizza'))
console.log(items.endsWith('cheesse burrito'))
