
//Funcion que toma los datos ingresados en el select y los guarda en el localstorage
function getData(){
    let glassesOp1 = document.getElementById("glassesOp1").value;
    let glassesOp2 = document.getElementById("glassesOp2").value;
    
    localStorage.setItem("Lentes1", glassesOp1);
    localStorage.setItem("Lentes2", glassesOp2);
    return false;
}

//Toma los datos del localstorage y los pinta en la tabla
document.getElementById("glasses1").innerHTML = localStorage.getItem("Lentes1");
document.getElementById("glasses2").innerHTML = localStorage.getItem("Lentes2");


//Funcion que elimina una fila de la tabla
document.getElementById("borrar1").addEventListener("click", eliminarProducto1);
document.getElementById("borrar2").addEventListener("click", eliminarProducto2);

function eliminarProducto1(e){
    e.preventDefault();
  let deleteGlasses1 = document.getElementById("glass1");
   deleteGlasses1.remove();
   localStorage.removeItem("Lentes1");
}

function eliminarProducto2(e){
    e.preventDefault();
  let deleteGlasses2 = document.getElementById("glass2");
   deleteGlasses2.remove();
   localStorage.removeItem("Lentes2");
}

//Valida si alguno de los dos selects están vacíos

function validarSelect1(){
    var selectelem = document.getElementById("glassesOp1");
    var btn = document.getElementById("button");
    btn.disabled = !selectelem.value;
}

function validarSelect2(){
    var selectelem = document.getElementById("glassesOp2");
    var btn = document.getElementById("button");
    btn.disabled = !selectelem.value;
}



