$(function() {
  $('.h').hover(function() {
    $('#m').css('opacity', '30%');
    $('#m').css('transition', 'opacity 1s ease');
  }, function() {
    $('#m').css('opacity', '100%');
  });
});


var myDate = new Date();
		var h = myDate.getHours();

		var greet;

		  if (h >= 0 && h <= 5) { // entre meia noite (0h) e 5 da madrugada
		    greet = 'Boa madrugada';
		  } else if (h >= 6 && h < 12) { // entre 6 e 11 da manhã
		    greet =  'Bom dia';
		  } else if (h >= 12 && h < 18) { // entre meio dia (12h) e 17 (5h) da tarde
		    greet =  'Boa tarde';
		  } else if (h >= 18 && h <= 23) { // entre 18 (6h) e 23 (11h) da noite
		    greet =  'Boa noite';
		  }
		document.getElementById('j').innerHTML = greet + ' e Saudações visitante, como vai?, espero que esteja bem, atualização nova e está bem simples para navegar, então não tenho muito o que falar nesta pequena apresentação mas espero que curta o meu trabalhos já feito, mesmo sendo pra anime ou entre outras categorias! ';

document.addEventListener("contextmenu", function (e){e.preventDefault();}, false);