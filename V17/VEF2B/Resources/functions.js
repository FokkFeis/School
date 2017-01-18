
// This is an example of a function declaration (named function)
// processed when execution enters the context in which it appears (before any step-by-step code is executed)
function helloWorld() {
  alert('Hello World');
}
helloWorld();  // call by name of function



// hér er annað nafnlaust fall sem býr til scope (function scope), til að vernda breytur og föll frá öðru JS kóða (name conflict)
// alert er ekki keyrt
(function() {
  alert('Hello World');
})

// Nafnlaust fall með Immediate invoked function (IIFE) sjá. bls. 97 um IIFE
// IIFE er hér notaður sem wrapper utan um kóða og látið keyra einu sinni, strax og JS þýðandi kemur að kóðanum
// allt innan slaufusvigans er keyrt.
// kemur í veg fyrir name-conflict á breytum, myndar scope
// ytri svigarnir, grouping operator svo þýðandi meðhöndli sem expression
// innri svigarnir, til að segja þýðanda að kalla á fall strax
(function() {
  alert('Hello World'); // alert er keyrt
}() ); //IIFE  líka gert svona })();


// ef við viljum nota param.
(function(value) {
  var age = value;  // age = 1, private breyta
  console.log(age); // 1
}(1) );
console.log(age); // virkar ekki hér fyrir utan, Uncaught ReferenceError


/**
 * Return multiple values using array
 */

function getSize (width, height, depth) {
	var area = width * height;
	var volume = width * height * depth;
	var sizes= [area , volume];
	return sizes;
}
var areaOne = getSize (3, 2, 3)[0];   //sizes[0], vísar í gildið 6 (area), sem er í fyrsta sæti í sizes fylkinu
var volumeOne = getSize (3, 2, 3)[1]; //sizes[1], volume 18

/**
 * anonymous function expression
 * defined at run-time
 * a variable that has an anonymous function assigned to it,
 * the variable is a way of calling it
 * ath. any code that appears before the function could potentatially alter what goes on inside the function.
 */

var helloWorld = function() {
	alert('Hello World');
};
helloWorld(); // call  by reference



function foo(){} // function declaration

(function foo(){}); // function expression: due to grouping operator (scope)


// The call stack, the way control flows through functions.
// http://eloquentjavascript.net/03_functions.html
// Every time a function is called, the current context is put on top of this “stack” (memory)
// the call to greet causes control to jump to the start of that function (line 2).
// It calls console.log (a built-in browser function), which takes control, does its job, and then returns control to line 2.
// Then it reaches the end of the greet function, so it returns to the place that called it, at line 4.
// The line after that calls console.log again.
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");


//  Function declaration vs function expression
//  Sjá nánar bls. 452-457 í JavaScript & jQuery by Jon Duckett

/**
 * Function declaration (hoisting)
 *  function declarations are parsed and evaluated before any other expressions are.
 *  Even if declaration is positioned last in a source,
 *  it will be evaluated foremost any other expressions contained in a scope
 */

x();             // Works even though it's above the declaration
function x() {
    console.log('x');
}


/**
 *  Function declaration og statements
 *  because function declaratin is not part of the step-by-step execution of the code,
 *  you can't put it inside a control structure like try, if, switch, while, etc.
 *  Sjá hoisting
 */

if (someCondition) {
    function foo() {    // INVALID AND WILL FAIL ON many engines,
    }
}


// Call Stack, Hvort kom á undan eggið eða hænan
// This will cause an infinite back-and-forth between two functions.
// it would be infinite, if the computer had an infinite stack.
// As it is, we will run out of space, or “blow the stack”.
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??

// Hver er munurinn á þessum kóða, hver er úkoman?
/*
* Svar:
* this is not valid syntax in ECMAScript, so JavaScript engines try to
* error correct into an appropriate state. The problem is that browsers don’t consistently error correct
* in this case. Most browsers return the second declaration regardless of condition; Firefox returns
* the first when condition is true. This pattern is dangerous and should not be used. It is perfectly
* fine, however, to use function expressions
*/


//Function declaration

var t = true;
if(true){
  function sayHi(){
    alert("Hi!");
  }

} else {
  function sayHi(){
  alert("Yo!");
  }
}

sayHi();


//Function expression
var sayHi;
if(t){
  sayHi = function(){
  alert("Hi!");
  };

} else {
  sayHi = function(){
  alert("Yo!");
  };
}
sayHi();




/**
 * Variable scope (function-level scope)
 *  breyta í function er local
 */

var x = "outside";
var f1 = function() {
  var x = "inside f1";
};

f1();
console.log(x); // outside


/**
 * Variable scope (function-level scope)
 * ef gleymist að skilgreina var í function þá verður breytan global
 * ef skrifað "use strict"; efst í function þá ætti að koma error annars ekki
 */

var x = "outside";
var f2 = function() {
  // "use strict";  vantar hérna
  x = "inside f2";		// vantar var á undan x, default global scope ef var er sleppt.
};

f2();
console.log(x);  //  inside f2


// Optional Arguments
// JavaScript is extremely broad-minded about the number of arguments you pass to a function.
// If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters simply get assigned the value undefined.
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
// Ítarefni: Sjá Arguments object



/**
 * Function pointer (expression sýnidæmi)
 * When you create a function, that function occupies a block of memory.
 * Internally, the only reference it has is its location in Javascript's heap.
 * When you pass a pointer to the function you're passing the pointer to this memory location
 * and NOT the function's name.
 */
var originalFunction = function () {
   alert('hello world');
}

var copiedFunction = originalFunction;  // vantar sviga viljandi, copiedFunction is a pointer to the hello world function (nafnlausa fallið) that was initially defined

var originalFunction = function () {	// originalFunction is now pointing to a new function block in the heap (goodbye world).
   alert('goodbye world');
}

copiedFunction();   // outputs Hello World. copiedFunction retains its pointer to the original function (hello world) það er ennþá til í minni



/**
 * Multiple names for a single function
 * Function names are simply pointers to functions, they act like any other variable containing
 * a pointer to an object.
 * This means it’s possible to have multiple names for a single function:
 */
function sum(num1, num2){
	return num1 + num2;
}

alert(sum(10,10)); 			//20

var anotherSum = sum;		     // Að nota function name án þess að nota svigana () accesses the function pointer instead of executing the function.
							              // breytan anotherSum er með reference (vísar einnig á function)
alert(anotherSum(10,10)); 	// 20

sum = null;			  		// sum (function nafn) er ekki lengur með vísun á function
alert(anotherSum(10,10)); 	// 20, enn hægt að nota vísun með breytu
