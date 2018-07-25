var encri=encriptar();
var desen=desencriptar();
function encriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;
           var palabra_codificada = btoa(palabra);    
    document.getElementById("resultado").innerHTML = palabra_codificada;
    return palabra_codificada;
}

function desencriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;

   var palabra_descodificada = atob(palabra); 
    
    document.getElementById("resultado").innerHTML = palabra_descodificada;
    return palabra_descodificada;
}
if(enri!= '' && encri!= null){
    document.getElementById("resultado").innerHTML = palabra_codificada;
}
if(desen!= '' && desen!= null){
    document.getElementById("resultado").innerHTML = palabra_codificada;
}
if(enri!= '' && desen!=''){
    document.write("escriba una palabra o codigo");
}




