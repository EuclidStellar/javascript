function AddTwoNumber(num1,num2) {
    return num1 + num2;
    
}

console.log(AddTwoNumber(2, 3)) // 5;



// functuon with objects 

function Calculateaddcart( val1 , val2 , ...num1) {
    return num1
    
}

console.log(Calculateaddcart(2, 3, 4, 5, 6, 7, 8, 9, 10)) // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
;


let user = {
    email: "euclid@google.com",
    name: "euclid",
}


function HandleObj(anyobj) {

    console.log(anyobj.email);
    console.log(anyobj.name);
}

 //

console.log(HandleObj(user)) // undefined


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function retruensecondnum(num2) {

    return arr[num2]
    
}

console.log(retruensecondnum(2)) // 3