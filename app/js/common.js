$( document ).ready(function(){

	// Выпадающий список для выбора валюты (по аналогии с select>option)
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
		if (!div.is(e.target)) // если клик был не по нашему блоку
 		{
			div.hide(); // скрываем его
		}
	});

	// Открыть/Закрыть выпадающее меню
	$('.basic-menu__link').on('click', function(e){
    //внутри нашего пункта меню находим "выпадашку"
    var $dropMenu = $(this).parent().find('.basic-menu__sub');
    //если наш .basic-menu__sub видимый - скрываем, если скрыт - показываем
    if($dropMenu.is(':visible')){
        $dropMenu.hide();
    } else {
        //скрываем все видимые "выпадашки" на странице        
        $('.basic-menu__sub:visible').hide(); 
        $dropMenu.show();
    }
	});

	// Выпадающий список для выбора карточки (по аналогии с select>option)
	$(".my-cart").on("click", ".init", function() {
    	$(this).closest(".my-cart").children('.my-cart__item:not(.init)').toggle();
	});

	var allOptions2 = $(".my-cart").children('.my-cart__item:not(.init)');
	$(".my-cart").on("click", ".my-cart__item:not(.init)", function() {
	    allOptions2.removeClass('selected');
	    $(this).addClass('selected');
	    $(".my-cart").children('.init').html($(this).html());
	    allOptions2.toggle();
	});

	// Закрыть выпадающий список при клике в другом месте
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div2 = $('.my-cart__item:not([class*="init"])'); // берем li, у которых нет класса init
		if (!div2.is(e.target)) // если клик был не по нашему блоку
 		{
			div2.hide(); // скрываем его
		}
	});

	// Бургер меню
	$('.burger-link').on('click', function() {
		$(this).toggleClass('burger-link_active');
		$('.basic-menu').toggleClass('basic-menu_mobile');
	});

	// Закрыть мобильное меню при клике в другом месте
	$(document).mouseup(function (e) {
    var container = $(".basic-menu");
    if (container.has(e.target).length === 0){ // если клик был не по .basic-menu
        container.removeClass('basic-menu_mobile'); // скрываем за экран .basic-menu
        $('.burger-link').removeClass('burger-link_active'); // приводим .burger-link в исходное
    }
	});

	// Настройки слайдера .top-slider
	$(".top-slider").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		smartSpeed: 800,
		fluidSpeed: 800,
		navSpeed: 800,
		dotsSpeed: 800,
		dragEndSpeed: 800
	});

	
	// Настройки слайдера .goods-slider
	$(".goods-slider").owlCarousel({
    	loop: true,
    	margin: 30,
    	nav: true,
    	slideBy: 2,
    	responsiveClass: true,
	    responsive:{
	        0:{
	            items: 2
	        },
	        576:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        992:{
	            items: 4
	        },
	        1200:{
	            items: 4
	        }
	    },
	    dots: false,
	    smartSpeed: 400,
		fluidSpeed: 400,
		navSpeed: 400,
		dotsSpeed: 400,
		dragEndSpeed: 400,
		navText: ['<span class="icon-chevron-thin-left"></span>', 
		'<span class="icon-chevron-thin-right"></span>']
	});

	// Табы (для слайдера .goods-slider)
	$(function() {
		$("ul.tabs__caption").on("click", "li:not(.active)", function() {
		$(this)
		.addClass("active")
		.siblings()
		.removeClass("active")
		.closest("div.tabs")
		.find("div.tabs__content")
		.removeClass("active")
		.eq($(this).index())
		.addClass("active");
		});
	});

	$("#wr-tabs").on("click", ".tab", function(){

     var tabs = $("#wr-tabs .tab"),
            cont = $("#wr-tabs .tab-cont");

       // Удаляем классы active
        tabs.removeClass("active");
       cont.removeClass("active");
       // Добавляем классы active
      $(this).addClass("active");
       cont.eq($(this).index()).addClass("active");

      return false;
   });

	//E-mail Ajax Send
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