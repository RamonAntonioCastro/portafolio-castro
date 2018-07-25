$(document).ready(function(){
    $('#btn1').prop('disabled',true);
    $('#btn2').prop('disabled',true);    
    $('#str1').keyup(function(){
        $('#btn1').prop('disabled', this.value == "" || $("#str2").val()== "" ? true : false);     
    })
    $('#str2').keyup(function(){
        $('#btn1').prop('disabled', this.value == "" || $("#str2").val()== "" ? true : false);     
    })
    $('#num1').keyup(function(){
        $('#btn2').prop('disabled', this.value == "" ? true : false);     
    })
});  
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control-prev").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control-next").click();
       return false;
    }
});
function control1(){
    var str1=$("#str1").val();
    var str2=$("#str2").val();
    concatenar(str1,str2);
}
function control2(){
    var num=$("#num1").val(); 
    if(num<=0){
        $('.modal-body').html('No se puede usar numeros menores o iguales a 0');
        return;
    }
    mostrarMatriz(num);
}

function concatenar(str1,str2){
    $('.modal-body').html('La nueva cadena concatenada es: '+str1+' '+str2);
}

function mostrarMatriz(num){
    var cad='<table>';
    for(i=0;i<num;i++){
        cad+='<tr>'
        for(x=0;x<num;x++){
            if(i==x){
                do{
                    y=Math.floor((Math.random() * 9)+1 );
                }while(y%3!=0);
                cad+='<td>'+y+'</td>';
            }
            else{
            cad+='<td>'+Math.floor((Math.random() * 9)+1 )+'</td>';}
        }
        cad+='</tr>';
    }
    $('.modal-body').html(cad);
}