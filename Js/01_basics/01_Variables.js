const accountId = 12345
let accountEmail = "saket@gmail.com"
var accountPassword = 465564765
accountCity = "GayaJi"
let accountState;

// accountId = 090909 //Not Allowed

console.log(accountId);

accountEmail = "Saket.ulsi@gmail.com"
accountPassword = 98765098
accountCity = "Bangalore"

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
