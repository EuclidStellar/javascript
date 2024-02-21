
const ob = {
    a:2,
    b:3,
};

const ob2 = {
    m:5,
    n:6,
};

ob3 = {
    ...ob,
    ...ob2,

}
ob3.age = 18;
console.log(ob3); // { a: 2, b: 3, m: 5, n: 6 }

