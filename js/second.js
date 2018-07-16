 const a = parseInt(document.getElementById('first').value);
 const b = parseInt(document.getElementById('second').value);
 const da = parseFloat(document.getElementById('dis').value);
 const gs = parseFloat(document.getElementById('gstin').value);
 const bs = a * b; 
 const dis = (bs * da) / 100;
 const am_af = bs-dis;
 const gst_am = (am_af * gs) / 100;
 const fin = (gst_am + am_af);
 
// function add (){  
//     const c = a + b;
//     document.getElementById('output').innerHTML= c ;
// }
// function sub(){
//    const d = a - b;
//     document.getElementById('output').innerHTML= d ; 
// }
// function mul(){
//     const e = a * b ;
//     document.getElementById('output').innerHTML=e;
// }
// function div(){
//     const f = a/b;
//     document.getElementById('output').innerHTML= f;
    
// }

// function rem(){
//     const g = a%b;
//     document.getElementById('output').innerHTML=g;
// }

function basic_pric(){
    
    document.getElementById('basic').innerHTML= bs;
}

function discount_value() {
    
    document.getElementById('discount_amount').innerHTML = dis;
    document.getElementById('discount_amount').style.color='green';
    // console.log ('')
}
 
function amout_af(){
    document.getElementById('amout_af_dis').innerHTML = am_af;
    document.getElementById('amout_af_dis').style.display="block";
}
function gst_amt(){
    
    document.getElementById('gst_amd').innerHTML = +gst_am;
    document.getElementById('gst_amd').style.color='red';


}

function gst() {
    document.getElementById('output').innerHTML = fin;
}


