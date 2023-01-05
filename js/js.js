$(function() {
  $('.h').hover(function() {
    $('#m').css('opacity', '30%');
    $('#m').css('transition', 'opacity 1s ease');
  }, function() {
    $('#m').css('opacity', '100%');
  });
});


		var myDate = new Date();
		var hrs = myDate.getHours();

		var greet;

		if (hrs < 12) {
		  greet = 'Bom dia';
		} else if (hrs >= 12 && hrs <= 19) {
		  greet = 'Boa tarde';
		} else if (hrs >= 20 && hrs <= 24) {
		  greet = 'Boa noite';
		}
		document.getElementById('j').innerHTML = greet + ' e Saudações visitante, como vai?, espero que esteja bem, atualização nova e está bem simples para navegar, então não tenho muito o que falar nesta pequena apresentação mas espero que curta o meu trabalhos já feito, mesmo sendo pra anime ou entre outras categorias! ';

document.addEventListener("contextmenu", function (e){e.preventDefault();}, false);