const accountId = 1234
let accountName = 'Gaurav Singh'
var accountBalance = 1000000   // do not use var because javascript has an issue with var 
accountCity = 'Bangalore'


console.log("before operations");

console.table([accountId, accountName, accountBalance, accountCity])


accountName = 'Euclid Stellar'
accountBalance = 69
accountCity = 'Lucknow'


console.log("After operations");

console.table([accountId, accountName, accountBalance, accountCity])