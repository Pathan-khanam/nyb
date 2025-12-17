var details ={
    name:"hi",
    age:20,
    city:'bnglr',
    address:{
        pincode:5000654

    },

    play:function (){

        console.log(this)

    }
}
console.log(details)
details.play()


function test(){
    console.log(this)
}

test()


var a = function hello(){
    console.log(this)
}

a()

 var b = function() {
  console.log(this)
 }

b()


var c = () => {
    console.log(this)
}

c()



//call apply bind


function test(city, country){
    console.log(`Hi, Im ${this.name} from ${city}, ${country}`)

}


var prsn = {name:'hello'}

var b=test.bind(prsn,'mumbai','india')
test.call(prsn, 'bnglr', 'india')

test.apply(prsn,['hyd','india'])

b()
test.bind(prsn,2,3,56,4,8,9)()