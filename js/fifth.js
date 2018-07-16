// document.write('hello world and thin is working');



function seename(){
    // var firstName, lastName;
   var firstName = document.getElementById('first');
   var lastName = document.getElementById('second');
    document.write('fistName');
    document.write('lastName');
}

function first (){
    var a = 23;
    var b = 10;
    var c = "Test";
    var linebreak = "<br/>"

    document.write('a + b = ');
    result = a + b;
    document.write(result);
    document.write(linebreak);

    document.write ('a - b =');
    result = a -b ;
    document.write(result);
    document.write(linebreak);

    document.write("a / b = ");
    result = a / b;
    document.write(result);
    document.write(linebreak);

    document.write("a % b = ");
    result = a % b;
    document.write(result);
    document.write(linebreak);

    document.write("a + b + c = ");
    result = a + b + c;
    document.write(result);
    document.write(linebreak);

    a = ++a;
    document.write("++a = ");
    result = ++a;
    document.write(result);
    document.write(linebreak);

    b = --b;
    document.write("--b = ");
    result = --b;
    document.write(result);
    document.write(linebreak);

    
}

function second() {

    var a = 10;
    var b = 20;
    var linebreak = "<br />";

    document.write("(a == b) => ");
    result = (a == b);
    document.write(result);
    document.write(linebreak);

    document.write("(a < b) => ");
    result = (a < b);
    document.write(result);
    document.write(linebreak);

    document.write("(a > b) => ");
    result = (a > b);
    document.write(result);
    document.write(linebreak);

    document.write("(a != b) => ");
    result = (a != b);
    document.write(result);
    document.write(linebreak);

    document.write("(a >= b) => ");
    result = (a >= b);
    document.write(result);
    document.write(linebreak);

    document.write("(a <= b) => ");
    result = (a <= b);
    document.write(result);
    document.write(linebreak);
    
}
function third (){
    var a = true;
    var b = false;
    var linebreak = "<br />";

    document.write("(a && b) => ");
    result = (a && b);
    document.write(result);
    document.write(linebreak);

    document.write("(a || b) => ");
    result = (a || b);
    document.write(result);
    document.write(linebreak);

    document.write("!(a && b) => ");
    result = (!(a && b));
    document.write(result);
    document.write(linebreak);
}
function forth(){
    var a = 2; // Bit presentation 10
    var b = 3; // Bit presentation 11
    var linebreak = "<br />";

    document.write("(a & b) => ");
    result = (a & b);
    document.write(result);
    document.write(linebreak);

    document.write("(a | b) => ");
    result = (a | b);
    document.write(result);
    document.write(linebreak);

    document.write("(a ^ b) => ");
    result = (a ^ b);
    document.write(result);
    document.write(linebreak);

    document.write("(~b) => ");
    result = (~b);
    document.write(result);
    document.write(linebreak);

    document.write("(a << b) => ");
    result = (a << b);
    document.write(result);
    document.write(linebreak);

    document.write("(a >> b) => ");
    result = (a >> b);
    document.write(result);
    document.write(linebreak);

}
