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

