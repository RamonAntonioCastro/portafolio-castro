var encri=encriptar();
var desen=desencriptar();
var palabra_codificada;
var palabra_descodificada;
var codi;
var deco;
function encriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;
    for(var i=0;i<100;i++){
        palabra_codificada = btoa(palabra);
        codi=palabra_codificada;
        palabra=codi;
    }
    document.getElementById("resultado").innerHTML = palabra_codificada;
    return palabra_codificada;
}

function desencriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;
    for(var i=0;i<100;i++){
        palabra_descodificada = atob(palabra);
        palabra=alabra_descodificada;
    }
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