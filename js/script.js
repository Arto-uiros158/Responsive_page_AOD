jQuery(document).ready(function($) {
	
	// IMAGE-BACKGROUND (IBG)
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	// ADAPTIVE MENU (BURGER)
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // открываем/закрываем меню
		$('body').toggleClass('lock');
		// не даем странице прокручиваться при открытом меню
	});

	// SLIDER
	$('.slider').slick({
		/* Свойства слайдера */
		arrows: false, /* показывает/скрывает стрелки */
		dots: true, /* показывает/скрывает точки */
		adaptiveHeight: true, /* автоматически изменяет высоту слайдера в зависимости от высоты изображения (работает вкупе со свойством align-items: flex-start элемента .slick-track) */
		slidesToShow: 1, /* количество показываемых слайдов */
		slidesToScroll: 1, /* количество пролистываемых слайдов */
		speed: 400, /* скорость пролистывания */
		easing: 'ease', /* тип анимации при прокрутке */
		infinite: true, /* "конечность" прокрутки */
		initialSlide: 0, /* слайд, с которого мы начинаем */
		autoplay: false, /* автопроигрывание */
		autoplaySpeed: 3000, /* скорость автопроигрывания */
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true, /* останавливает автопроигрывание при взаимодействии с элементами слайдера */
		draggable: true, /* возможность "перетаскивать" слайды мышкой */
		swipe: true, /* возможность пролистывать слайды движением руки (на планшетах/мобильных) */
		touchThreshold: 10, /* момент срабатывания слайда, т.е. слайдер делится на n частей, и слайд меняется тогда, когда пролистывается, на это длину одной части */
		touchMove: true, /* слайды будут перелистываться при свайпе, но визуального движения кадров не будет */
		waitForAnimate: false, /* позволяет перелистывать слайды, не дожидаясь конца анимации прокрутки */
		centerMode: true, /* размещает 1й слайд по центру */
		variableWidth: false, /* "автоматический адаптив" слайдера: все слайды выстраиваются друг за другом исходя из своей ширины, а те, которые не помещаются в слайдер просто обрезаются */
	});

	// GO-TO
	$('.go-to').click(function() {
		var target = $(this).attr('href').replace('#','');
		$('body, html').animate(
			{
				scrollTop: $('.' + target).offset().top
			},
			500
		);
		$('.header__burger,.header__menu').toggleClass('active'); // открываем/закрываем меню
		$('body').toggleClass('lock');
			// не даем странице прокручиваться при открытом меню
	});
});


