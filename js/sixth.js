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
    first = document.getElementById('first').vlaue;

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