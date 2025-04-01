var myName = "Jessica"; 
var yourName = prompt('What is your name?');
alert(myName); //caixa de alerta
alert("My name is " + myName + ", welcome to the couse" + yourName + "!");

// Switch variable content a to b
function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}

// Alert two variables
var name = "Jessica";
var message = "Hello";

alert(message + " there, " + name);

// String lengths
var text = prompt("Write some text.");
alert("You have written " + text.length + ", you have " + (140 - text.length) + "." );

// Slice strings
var name = "Jessica";
name.slice(0,1); //(inicial, end-not including)

var tweet = prompt("Write some text: ");
console.log(tweet.slice(0,140));

console.log(prompt("Write some text: ").slice(0,140));