function n(dato){ 
    document.getElementById("ops").value += dato;
    
 }

 
 function ops() { 
 Math.round(Math.floor( document.getElementById("ops").value = eval(document.getElementById('ops').value))); 
 const inputElement = document.getElementById('ops');
  const result = Math.round(Math.floor(eval(inputElement.value)));
  const outputElement = document.getElementsByClassName('output');
  outputElement.textContent += `${inputElement.value} = ${result}\n`;
  inputElement.value = result;
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






