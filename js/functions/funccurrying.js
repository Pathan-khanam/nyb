function A(a){
    return function B(b){

        return function C(c) {

            return function D(d) {
                return a+b+c+d
            }
        }
        
    }
}

console.log(A(1)(2)(3)(4))



