function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Invalid input: Operands must be numbers";
  }
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // Invalid input: Operands must be numbers
console.log(foo("2", 3)); // Invalid input: Operands must be numbers
console.log(foo("2", "3")); // Invalid input: Operands must be numbers

//Alternative solution using Number()
function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(2,3));//5
console.log(foo2(2,"3"));//5
console.log(foo2("2",3));//5
console.log(foo2("2","3"));//5