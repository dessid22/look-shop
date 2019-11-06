$( document ).ready(function(){

	// Выпадающий список для выбора (по аналогии с select>option)
	$(".currency").on("click", ".init", function() {
    	$(this).closest(".currency").children('.currency__item:not(.init)').toggle();
	});

	var allOptions = $(".currency").children('.currency__item:not(.init)');
	$(".currency").on("click", ".currency__item:not(.init)", function() {
	    allOptions.removeClass('selected');
	    $(this).addClass('selected');
	    $(".currency").children('.init').html($(this).html());
	    allOptions.toggle();
	});

	// Закрыть выпадающий список при клике в другом месте
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.currency__item:not([class*="init"])'); // берем li, у которых нет класса init
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(window).on('load', function() {

});