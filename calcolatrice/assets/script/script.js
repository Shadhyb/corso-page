function n(dato){ 
    document.getElementById("ops").value += dato;
    if(dato === 0+0+n){
        dato = n
    }
    document.getElementsByClassName('output')[0].innerHTML += dato ;
  
}



 
 function ops() { 
 Math.round(Math.floor( document.getElementById("ops").value = eval(document.getElementById('ops').value))); 
let ops = (Math.round(Math.floor( document.getElementById("ops").value = eval(document.getElementById('ops').value))))
document.getElementsByClassName('output')[0].innerHTML += '=' + ops + '<br>';

}

function del() { 
    document.getElementById("ops").value = ""; 
    
}
function phi(){
    document.getElementById('ops').value *=3.14
}
function percentage(){
    document.getElementById('ops').value /=100 
}








