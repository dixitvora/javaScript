 const a = parseInt(document.getElementById('first').value);
 const b = parseInt(document.getElementById('second').value);
function add (){  
    const c = a + b;
    document.getElementById('output').innerHTML= c ;
}
function sub(){
   const d = a - b;
    document.getElementById('output').innerHTML= d ; 
}
function mul(){
    const e = a * b ;
    document.getElementById('output').innerHTML=e;
}
function div(){
    const f = a/b;
    document.getElementById('output').innerHTML= f;
    
}

function rem(){
    const g = a%b;
    document.getElementById('output').innerHTML=g;
}

