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

let a2 = ['a', 'b', 'c'];
console.log(a2.slice(0, 1));
console.log(a2.slice(1));
console.log(a2.slice(1, 2));
console.log(a2.slice(2, 1));

let n = [4, 8, 15, 16, 23, 42];
n.sort();
console.log(n);   // this really really really sucks!!!!!!!

n.sort(function (a, b) {
    return a - b;
});
console.log(n);

