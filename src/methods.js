let a = ['a', 'b', 'c'];
let b = ['x', 'y', 'z'];
let c = a.concat(b, true);
console.log(c);

a.push('d');
console.log(a);
let j = a.join('');
console.log(j);
console.log(a.join('|'));

console.log(a.pop());

a.push(b, true);
console.log("a: ", a);

a.reverse();
console.log("a (after reverse): ", a);

let shift = a.shift();
console.log("a (after shift): ", a);
console.log("shift: ", shift);

