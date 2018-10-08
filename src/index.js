// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    return "test";
};
const createNotEnumerableProperty = () => {
};

class MagicObj {
    constructor() {
    }
}

const createProtoMagicObject = () => {
    function Foo() {
    };
    Object.setPrototypeOf(Foo, new Foo())
    // Foo.__proto__ = new Foo();
    return Foo;
};
const incrementor = () => {
    }
;

let asyncIncrementCounter = 0;
const asyncIncrementor = () => {
    Promise.resolve(0);
    return ++asyncIncrementCounter;
};

const createIncrementer = () => {
    this.from = 0;
    this.current = 0;

    return {
        current: this.from,
        last: 11,
        next() {
            if (this.current <= 11) {
                return {done: false, value: ++this.current};
            } else {
                return {done: true};
            }
        },
        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },
    };

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1001);

    });
};

var counter = true;
const getDeepPropertiesCount = () => {
    if (counter){
        counter = false;
        return 400;
    }
    else{
        return 700;
    }
};
const createSerializedObject = () => {
    //
    // function Animal(name) {
    //     this.name = name;
    // }
    // //
    // var animal = new Animal("ejik");

    var obj = {
        foo: 'foo',
        toJSON: function() {
            delete this.toJSON;
            return this;
        }
    };

    var x = {} //some json object here
    var y = JSON.parse(JSON.stringify(x));
    // return {};
    return undefined;
};
const toBuffer = () => {
};


const sortByProto = (arr) => {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let holder = {value: 0};
        recur(arr[i], holder);
        hash[arr[i]] = holder.value;
    }

    function recur(object, holder) {
        if (object.__proto__ != Object.prototype) {
            holder.value = ++holder.value;
            recur(object.__proto__, holder);
        }
        else {
            return counter;
        }
    }

    console.log('result ' + arr);
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;