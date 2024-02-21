

const Mysym = Symbol("key1")


let ob = {
    name : "gaurav",
    age : 18 ,
    phone : 9744,
    [Mysym ]: "mykey1",
    email: "euclid@google.com",
    isLoggedIn : true ,
    loggedInDays :["monday" , "wednesday"],


}

console.log(ob["name"]);
console.log(ob.name);
console.log(ob[Mysym]);


ob.email="euclid@uber.com"

console.log(ob);

ob.fun = function() {
    console.log(`gaurav your email is ${this.email}`);
}

console.log(ob.fun); // reference of a function
