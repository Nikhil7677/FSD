/* History of JAvaScript:
NetScape is the company who wants to creates its own browser and one of the major browser of our begining times is "NETSCAPE NAVIGATOR". 
NetScape and Sun Micro Systems collaborate and hired BRENDAN EICH and invented the javascript in 10 days to interact with websites as pay to use.
It is invented by using the java programming language.
In the same way microsoft invented their own browser INTERNET EXPLORER by using their own Jscript copy of JavaScript free to use.
some of the companies like macromedia created ACTION SCRIPT and ECMA international created thier own scripting language called ECMA Script.
AJAX came in 2005 as a single page application(SPA) as a boost for javascript.
JavaSript is a intrepeted language. The execution is done line by line slow
Then the Chrome came with V8 engine. So javaScript is now compiled and intrepeted language
Then Node.js came with the environment which has a javascript engine.
Now by using javascript we can write applications on Desktop, Mobile, Backend server, Machine Learning.
TRADEMARK of JAVASCRIPT own by ORACLE. */


//Data types :- There are two Datatypes : Primitive and Object
// Primitive Data types are: Numbers, Strings, boolean, null, undefined, symbol
let a = 10;
let b = "Nikhil";
let c = null; 
let d ;
let e = true;
let expo= 12e14;
let BigInt = 797693167348623154n;
let understand = 10_00_00_000
let num = 0xff, num2= 0xaa;
console.log(typeof a, typeof b, c);
console.log(typeof b);
console.log(typeof c); //output : object  
console.log(typeof d);
console.log(typeof e);
console.log(Number.MAX_VALUE*2);
console.log(expo);
console.log(BigInt+2n)
console.log(understand)
console.log(num,num2);
console.log(5/0);
console.log(-2/0);
console.log(a/b);

// 3: Strings :

let first_Name = "Nikhil";
let Last_Name = "Mothukuri";
let fullname = first_Name +" " + Last_Name;
console.log(fullname);
console.log("Mothukuri\n Ni\tkhil\bl")// Learning about tabspace, newline , remove of extra char
console.log("Moth'uk'uri \"nikhil\"") // about using quotes"''"

// boolean: it is given false for 0,-0," ",' ', null, undefined.
// gives true to any number except above  false values.
let bool = 5>2;
console.log(typeof bool, bool)

/* 4: Another topic coercion :
if we do string + number : the output : String.
if we do string - number : the Output : Number.
*/
let str = "5";
let num4 = 7;
console.log(str + num4);
console.log(str - num4);
// explict conversion
str = Number("5")            
console.log(str +5 ,typeof str)
num4 = String(908)
console.log(num4 + 2, num4 -2,typeof num4);
//unary operator:
console.log(+str + 2 +" unary operation")

let sep = "234Nikhil";
let k = parseInt(sep);
console.log(k)

/* 5: Arithmetic operators are
Addition (+), Subtraction(-), mul(*), remainder(%), divide(/), boolean(true/false)
++x : pre increment , first increment then assign 
x++ : post increment , first assign then increment x
--x : pre decrement , first decrement then assign 
x-- : post decrement , first assign then decrement
*/ 

let E = 199;
let F = 198;
console.log(E+F,E-F,E*F,E%F,E/F,E>F);
console.log(++E,--E-1,E++,E--);
console.log(Math.pow(199,3));

// 6: Rational operators : >,<,>=,<=,===, = , == ;
let data1 = "pen";
let data2 = "pencil"
let data = data1>data2
console.log(data);
console.log(!data)

let r=''
let t = false
console.log(r==t); // equality operator , type coercion
console.log(r===t); // strictly equality operator

// 7: Logical operator  : AND(&&) , OR(||) , NOT(!)
let w=4, s=6, v=9;
let result = w>s && w>v;
console.log(result );
console.log(v>w || s>v);

// 8: Ternary operator : shortcut of the if , else condition:
let value = 9;
let uresult;
/*if (value%2===0){
    uresult = "Even"
}
else{
    uresult="Odd"
}
console.log(uresult);
*/
console.log(uresult=value%2===0 ? "Even" : "Odd");

// 9:Templet literal: Here we use quotes and speacial charcters in between the console to call the value 
 let A= 9;
 let G= 5;
 console.log("the product of "+ A + "and" + G + "is"+ A*G);
 console.log(`the addition of ${A} and ${G} is ${A*G}` ); //here backticks are also convinent to call the value in the string statement;
 console.log(`mothukuri
    nikhil`)    // no need to use \n for new line if we use backeticks;




