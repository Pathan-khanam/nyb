function show() {
  console.log(this.value);
}

show.call({ value: 100 });  // 100
show.apply({ value: 200 }); // 200
show.bind({ value: 300 })(); // 300


const calc = {
  value: 0,
  
  add(n) {
    this.value += n;
    return this;
  },
  
  multiply(n) {
    this.value *= n;
    return this;
  }
};

calc.add(5).multiply(2);
console.log(calc.value); // 10

const obj = {
  name: "Laptop",
  show: () => {
    console.log(this);   // window (NOT obj)
  }
};

obj.show();
