let a = ['a', 'b', 'c'];
let b = ['x', 'y', 'z'];
let c = a.concat(b, true);
console.log(c);

console.log("====================================");
console.log("=== SHIFT / REVERSE / PUSH / POP ===");

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


console.log("====================================");
console.log("=== SPLICE ===");

let a2 = ['a', 'b', 'c'];
console.log(a2.slice(0, 1));
console.log(a2.slice(1));
console.log(a2.slice(1, 2));
console.log(a2.slice(2, 1));

console.log("====================================");
console.log("=== SORT ===");

let n = [4, 8, 15, 16, 23, 42];
n.sort();
console.log(n);   // this really really really sucks!!!!!!!

n.sort(function (a, b) {
    return a - b;
});
console.log(n);

let m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
console.log(m);


// Function that takes a member name string and returns
// a comparison function that can be used to sort an
// array of objects that contain that member.
let by = function (name) {
    return function (o, p) {
        let a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
}

let s = [
    { first: 'Joe', last: 'Besser' },
    { first: 'Moe', last: 'Howard' },
    { first: 'Joe', last: 'DeRita' },
    { first: 'Shemp', last: 'Howard' },
    { first: 'Larry', last: 'Fine' },
    { first: 'Curly', last: 'Howard' }
];
console.log(s.sort(by('first')));
console.log(s.sort(by('last')));
console.log(
    s.sort(by('first')).sort(by('last'))
);

let by2 = function (name, minor) {
    return function (o, p) {
        let a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

s.sort(by2('last', by2('first')));
console.log(s);
console.log("\n");


let a3 = ['a', 'b', 'c'];
let r = a3.splice(1, 1, 'ache', 'bug');
console.log(a3);
console.log(r);
console.log("\n");

let a4 = ['a', 'b', 'c'];
let r2 = a4.unshift('?', '@');
console.log(a4);
console.log(r2);
console.log("\n");

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Function.method(
    'bind',
    function (that) {
        let method = this;
        let slice = Array.prototype.slice;
        let args = slice.apply(arguments, [1]);
        return function () {
            return method.apply(that, args.concat(slice.apply(arguments, [0])));

        }
    }
);

let x = function () {
    return this.value;
}.bind({ value: 666 });
console.log(x());
console.log("\n");

console.log(Math.PI);
console.log(Math.PI.toFixed(2));
console.log(Math.PI.toExponential(7));
console.log(Math.PI.toPrecision(7));
console.log(Math.PI.toString());
console.log("\n");

let aa = { member: true };
let bb = Object.create(aa);
let t = aa.hasOwnProperty('member');
let u = bb.hasOwnProperty('member');
let v = bb.member;
console.log(aa, bb, t, u, v);
console.log("\n");


