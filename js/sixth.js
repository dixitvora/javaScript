var car = ["first","second","third","fourth","fifth"];
document.getElementById('demo').innerHTML = car;
document.getElementById('demo').innerHTML = car.length;

var names ,text, fLen , i , first;
names = [
    "dixter",
    "hiral",
    "krisha",
    "deep"
];
    first = document.getElementById('first').value ;

    function sub() {
        names.push('first');
        document.getElementById('demo1').innerHTML = text;
    }
text = "<ul>";
fLen = names.length;
for (i = 0 ; i< fLen; i++ ) {
    text += "<li>" + names[i] + "</li>";
}
text += "</ul>";
document.getElementById('demo1').innerHTML = text;



var arr1 , arr2 , arr3, myChild ;
arr1 = ["first","second","third"];
arr2 = ["fourth","fifth","sixth"];
arr3 = ["seventh","eight","ningth"];

myChild = arr1.concat(arr2,arr3);
document.getElementById('demo2').innerHTML = myChild;

var d = new Date();
document.getElementById('demo3').innerHTML = Date();

function sub1(){


var age = parseInt(document.getElementById("second").value)  ;
if (age > 18 ){
    document.getElementById('demo4').innerHTML = "<b> qualify for the driving";
}
else {
    document.getElementById('demo4').innerHTML = "you are not qualify for driving";
}
}



function sub2(){
    var book = document.getElementById('third').value;
    if (book == "history"){
        document.getElementById('book_1').innerHTML = 'this is the history book';
    }
    else if (book == 'economics'){
        document.getElementById('book_1').innerHTML = ' this is the economics book';
    }
    else if (book == 'maths'){
        document.getElementById('book_1').innerHTML = " this is the maths book ";
    }
    else {
        document.getElementById('book_1').innerHTML = " unkown book ";
    }
}

function sub3() {
    var grade = document.getElementById('grad').value;
    switch (grade)
    {
        case 'A':document.getElementById('demo5').innerHTML = "you have the first grade";
        break;
        case 'B':document.getElementById('demo5').innerHTML = " you have the second grade ";
        break;
        case 'C':document.getElementById('demo5').innerHTML = " you have the third grade";
        break;
        case 'D': document.getElementById('demo5').innerHTML = " you have the forth grade ";
        break;
        case 'f': document.getElementById('demo5').innerHTML = " you have faile the exam ";
        break;
        default: document.getElementById('demo5').innerHTML = "unknown grade ";
    }
}


    // var count =0 ;
    // document.getElementById('demo6').innerHTML = " the starting loop";
    // while (count<10){
    //     document.getElementById('demo7').innerHTML = "Current Count" + count + "<br/>";
    //     count++;

    // }
    // document.getElementById('demo8').innerHTML = " the end of loop";

     var count = 0;
     document.write("Starting Loop ");

     while (count < 10) {
         document.write("Current Count : " + count + "<br />");
         count++;
     }

     document.write("Loop stopped!");


     var count = 15;

     document.write("Starting Loop" + "<br />");
     do {
         document.write("Current Count : " + count + "<br />");
         count++;
     }

     while (count < 30);
     document.write("Loop stopped!");


     var count;
     document.write("Starting Loop" + "<br />");

     for (count = 0; count < 10; count++) {
         document.write("Current Count : " + count);
         document.write("<br />");
     }

     document.write("Loop stopped!");


     var aProperty;
     document.write("Navigator Object Properties<br /> ");

     for (aProperty in navigator) {
         document.write(aProperty);
         document.write("<br />");
     }
     document.write("Exiting from the loop!");


     var x = 0;
     document.write('entering the loop <br/>');
     while (x<25){
         if (x == 5){
             break;
         }
         x = x+1;
         document.write( "this is the value of x " + x + '<br/>');

     }
document.write('exit from the loop <br/>');


var v = 1 ;
document.write('entering the loop <br/>');
while (v <10) {
    v = v+1 ;
    if (v == 5){
        continue;
        document.write('the value is out of the loop ');

    }
    document.write(v + "<br/>");
}
document.write('exit from the loop <br/>');


document.write ("entering the loop <br/>");
outerloop: 
for (i = 0 ; i <10 ; i++){
    document.write('outerloop : ' + i + '<br/>');
    innerloop :
    for (j =0 ; j<10; j++ ){
        if (j>3)break;
        if (i==2) break innerloop;
        if (i == 4 )break outerloop;
        document.write('innerloop:' +j + '<br/>');
    }
}
document.write("exit from the loop ");

document.write('<br>' + ' entering the loop ');
outerloop:
for (i = 0; i < 3 ; i++){
    document.write("outerloop:" + i + "<br>");
    for(j = 0; j <5 ; j++){
        if (j==3){
            continue outerloop;

        } 
        document.write('innerloop:' + j +'<br>');
    }
}

document.write('exit from the loop: <br>' );