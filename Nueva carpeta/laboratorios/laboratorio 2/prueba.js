var encri=encriptar();
var desen=desencriptar();
var alfa=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
var palabra_codificada;
var palabra_descodificada;
function encriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;
    for( var i=0;i< palabra.length; i++){
for(var j=0;j<alfa.length;j++){
if (palabra[i]==alfa[j]){
    if(palabra[i]=='x'){
        palabra[i]=alfa[0];
        }
        else if (palabra[i]=='y'){
        palabra[i]=alfa[1];
        }
        else if (palabra[i]=='z'){
        palabra[i]=alfa[2];
        }
        else if (palabra[i]==alfa[j]){
            palabra[i]=alfa[j+3];
            }    
        }

}
    }
               palabra_codificada=palabra;
    document.getElementById("resultado").innerHTML = palabra_codificada;
    return palabra_codificada;
}

function desencriptar(){
    var palabra = document.getElementsByTagName("input")[0].value;

    for(var i=0;i< palabra.length; i++){
        for(var j=0;j<alfa.length;j++){
        if(palabra[i]=='a'){
        palabra[i]=alfa[24];
        }
        else if (palabra[i]=='b'){
        palabra[i]=alfa[25];
        }
        else if (palabra[i]=='c'){
        palabra[i]=alfa[26];
        }
        else if (palabra[i]==alfa[j]){
            palabra[i]=alfa[j-3];
            }
        }
            }
            palabra_descodificada=palabra;
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