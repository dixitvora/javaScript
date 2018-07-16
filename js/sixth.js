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