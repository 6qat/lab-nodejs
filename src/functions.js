'use strict';

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
}
)

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
}
)

let s = "                 1234    ".trim()
console.log(s.length);

let n = (123.347).integer();
console.log(n);
console.log((-10 / 3).integer());

let hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}

/**
 * hanoi(3, 'Src', 'Aux', 'Dst');
 */

let walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
}

let getElementsByAttribute = function (att, value) {
    let results = [];

    walk_the_DOM(document.body, function (node) {
        let actual = node.nodeType === 1 && node.getAttribute(att); // short-circuit evaluation
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
}

let factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
}

console.log(factorial(4));

let myObject = (function () {
    let value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}
)();

myObject.increment(2);
console.log(myObject.getValue());

let quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    }
}

let myQuo = quo("amazed");
console.log(myQuo.get_status());

let fade = function (node) {
    let level = 1;
    let step = function () {
        let hex = level.toString(16); // to string in base 16 (hexadecimal)
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    }
    setTimeout(step, 100);
}

String.method('deentityify',
    function () {
        let entity = {
            quot: '"',
            lt: '<',
            gt: '>'
        };

        return function () {
            return this.replace(/&([^&;]+);/g, function (a, b) {
                let r = entity[b];
                return typeof r === 'string' ? r : a;
            });
        };

    }() // immediate invocation
);

let serial_maker = function () {
    let prefix = '';
    let seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            let result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};


let seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
let unique = seqer.gensym();
console.log(unique);

Function.method('curry', function () {
    let slice = Array.prototype.slice;
    let args = slice.apply(arguments);
    let that = this;
    return function () {
        /**
         * return that.apply(null, args.concat(slice.apply(arguments)));
         */
        return that(...args.concat(slice.apply(arguments)));
    };
}
);

let add = function (a, b) {
    return a + b;
}

let add1 = add.curry(1);
console.log(add1(6));

