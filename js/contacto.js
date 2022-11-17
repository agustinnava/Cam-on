function contadorCaracteres()
{
    var maxLength = 1000;
    var strLength = document.getElementById("subject").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
		document.getElementById("caracteresRestantes").innerHTML = 
		'<span style="color: red;">Ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}

$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});





