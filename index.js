var myName = "Jessica"; 
var yourName = prompt('What is your name?');
alert(myName); //caixa de alerta
alert("My name is " + myName + ", welcome to the couse" + yourName + "!");

// 79. Javascript Variables Exercise Start
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

// 83. String lenghts
var text = prompt("Write some text.");
alert("You have written " + text.length + ", you have " + (140 - text.length) + "." );

// 84. Slicing and Extractiong parts of a string
var name = "Jessica";
name.slice(0,1); //(inicial, end-not including)

var tweet = prompt("Write some text: ");
console.log(tweet.slice(0,140));

console.log(prompt("Write some text: ").slice(0,140));

// 85.86. Chaging casing in text
var name = "Jessica";
name = name.toUpperCase();
name = name.toLowerCase();

var name = prompt("What is your name?");
alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());
