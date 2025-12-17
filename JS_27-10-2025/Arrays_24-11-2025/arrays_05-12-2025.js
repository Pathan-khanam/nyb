function flatten(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flatten(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

var arr = [1, [2, [3, [4, 5]]], 6];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]

var sym = Symbol("s");
var arr = [1, ["a", { x: 10 }], [sym, [true, [null]]]];

function flattenMixed(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) return acc.concat(flattenMixed(val));
    else acc.push(val);
    return acc;
  }, []);
}

console.log(flattenMixed(arr));
// [1, "a", {x:10}, Symbol(s), true, null]

var arr = [1, { x: 10 }, [2, { y: 20 }, [3, { z: 30 }]]];

function flattenAll(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenAll(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

console.log(flattenAll(arr));
// [1, {x:10}, 2, {y:20}, 3, {z:30}]

var arr = [1, "a", [2, "b", [3, "c"]]];

var flattened = arr.flat(Infinity);

console.log(flattened); // [1, "a", 2, "b", 3, "c"]

var arr = ["a", ["b", ["c", "d"]], "e"];

function flattenAndUpper(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) acc.push(...flattenAndUpper(val));
    else acc.push(typeof val === "string" ? val.toUpperCase() : val);
    return acc;
  }, []);
}

console.log(flattenAndUpper(arr)); // ["A","B","C","D","E"]

var sym1 = Symbol("a");
var sym2 = Symbol("b");

var arr = [[sym1], { x: 1 }, [sym2, [{ y: 2 }]]];

function flattenMixed(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) acc.push(...flattenMixed(val));
    else acc.push(val);
    return acc;
  }, []);
}

console.log(flattenMixed(arr));
// [Symbol(a), {x:1}, Symbol(b), {y:2}]

function flattenDepth(arr, depth = 1) {
  if (depth < 1) return arr.slice();
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) acc.push(...flattenDepth(val, depth - 1));
    else acc.push(val);
    return acc;
  }, []);
}

var arr = [1, [2, [3, [4]]]];
console.log(flattenDepth(arr, 1)); // [1, 2, [3,[4]]]
console.log(flattenDepth(arr, 2)); // [1,2,3,[4]]
