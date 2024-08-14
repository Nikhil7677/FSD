//"Q1". [1 Point] Explain the difference between null and undefined in JavaScript.
/* Value of null and undefined is same but the value is not "0" because 0 itself is a value :(null==undefined) is true.
let a : Here we are declaring a variable but the value is not given. so, it is undefined.
let a = null : Here we are intentionally declaring null.*/

//Q2. [1 Point]What will be the output of the following code snippet, and why?
console.log('10' + 5); // here string and number is concatinated as "105"
console.log('10' - 5); // here string and number is subtracted as "5" because js is not defined '-' operator for strings so "10 is converting to number"
console.log(true + 2); // true value is "1". so, in js true value consider as 1 and perform addition 
console.log(false + undefined); // false value is "0".In js 'undefined' is NaN when involved in numeric operations.

//Q3. [1 Point] What is the difference between == and === in JavaScript? Provide examples.
// Ans: '==' equity operator : it can do type conversions possible
console.log(true ==1)
console.log(5=='5')
console.log(false==0)
console.log(null==undefined)
//here we can see that string and number is equal and boolean to number

// '===' strictly Equity operator : it didn't allow any type conversion 
console.log(true ===1)
console.log(5==='5')
console.log(false===0)
console.log(null===undefined)
//here we can see that string and number is notequal and also boolean to number.

//Q4. [1 Point] Predict the output of the following expressions and explain your reasoning:
console.log(0==false) // we are performing equity operation which allows type conversions
console.log(0===false) // we are performing strictly equity operation which not allows type conversions
console.log(''==0) // we are performing equity operation which allows type conversions of empty string and number'0'
console.log(''===0)  // we are performing Strictly equity operation which doesnot allows type conversions of empty string and number'0'

//Q5. [1 Point] Given the following code, what will be the output and why?
console.log(0 || 1 && 2 || 3); //The && operator has higher precedence than ||, 0 || 2 || 3.
console.log(false || (true && false) || true); //&& is evaluated first. true && false results in false.  false || false || true.
console.log(0 && 1 || 2 && 3) //0 && 1 evaluates to 0.2 && 3 evaluates to 3.The expression becomes 0 || 3, and || .

//Q6. [1 Point] Predict the output of the following expressions and explain your reasoning:
let a = 10, b=20, c=30;
console.log( a + b * c) //BODMAS rule: so mul * operator evaluated first and then addition 
console.log((a + b) * c) // Here brackets evaluates first and then mul *
console.log(a + b > c ? a : b) // terminary operates: checking the condition and if true it returns 'a' else returns 'b '
console.log((a > b) && (b > c) || (a > c)) // && evaluates first(a > b) is false and (b > c) is also false, so false && false gives false.

//Q7. [2 Points] Analyze and explain the output of the following code snippets: 
console.log([] + {}) //An empty array ([]) is converted to an empty string "", and an empty object ({}) is converted to "[object Object]". 
console.log({} + []) // same a first case
console.log([] == ![])//The expression ![] is false 
console.log('' == []) //Both '' and [] are converted to 0 during comparison, making the expression 0 == 0, which is true.

//Q8. [2 Points] What will be the output of the following code, and why? 
console.log(+"") //The unary + operator converts an empty string "" to 0.
console.log(+true) //The unary + operator converts true to 1.
console.log(+false) // The unary + operator converts false to 0. 
console.log(+null) //The unary + operator converts null to 0.
console.log(+undefined) //The unary + operator converts undefined to NaN (Not-a-Number), as undefined does not represent a numeric value.