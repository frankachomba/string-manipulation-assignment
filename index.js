const name = 'FRANK ACHOMBA'
const Age = 40
const height = 5.6

// bio using let 

let proffession = 'full stack engineer'
let address = "warri delta state"
let skin_color = "black"
let tribe = "ibo"
console.log(tribe, skin_color,address, proffession, name, Age, height)

//first name and last name

const Firstname = "frank"
const Lastname = "Achomba"

const Fullname = Firstname +" " + Lastname
console.log(Fullname)
console.log(Firstname  + " "+ Lastname)

//length of string

console.log(Fullname.length)

//upper and lower case

console.log(Fullname.toUpperCase());
console.log(Fullname.toLowerCase());

//Template Literals to creare full message

const Message = `my name is ${name}, i am ${Age} years old and ${height} foot tall `
console.log(Message)

//extrack characters

const First_five = Fullname.slice(0,5);
console.log(First_five);

// math operations

const price_of_shares = 36.5
const purchase_amount = 1000000

const total = price_of_shares + purchase_amount
const purchase_per_unit = purchase_amount/price_of_shares
const amount_payable = purchase_amount*price_of_shares
const total_investment = amount_payable-purchase_amount
console.log(total);
console.log(purchase_per_unit);
console.log(amount_payable);
console.log(total_investment);
console.log(Math.round(purchase_per_unit));
console.log(Math.floor(purchase_per_unit));
console.log(Math.ceil(purchase_per_unit));
console.log(Math.min(amount_payable,purchase_per_unit,total,total_investment));
console.log(Math.max(amount_payable,purchase_per_unit,total,total_investment));

