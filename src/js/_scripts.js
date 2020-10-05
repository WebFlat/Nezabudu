jQuery(function($){
	'use strict';
	
	$(document).ready(function(){
		$('.partners__items').slick({
			dots: true,
			slidesToShow: 4,
			infinite: true,
			speed: 500,
			arrows: false,
			autoplay: true
		});
	});

	$('.volunteers__options').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');
	
		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.select-active').not(this).each(function(){
				$(this).removeClass('select-active').next('ul.select-options').hide();
			});
			$(this).toggleClass('select-active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('select-active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('select-active');
			$list.hide();
		});
	
	});

// 	$(document).mouseup(function(e){ 
// 		var main= $('.nav')
// 		var div = $('.burger');
// 		var div2=  $('.burger-wrap');
// 		if (!main.is(e.target) && main.has(e.target).length === 0) { 
// 			div2.removeClass('open');
// 			div.removeClass('closed');
// 		}
// 	});
// 	$('.burger').click(function() {
// 		$('.burger-wrap').toggleClass('open');
// 		$('.burger').toggleClass('closed');
// 	});
// 	$('.nav__link').click(function() {
// 		$('.burger-wrap').removeClass('open');
// 		$('.burger').removeClass('closed');
// 	});

// //change background nav when scroll************************
// 	$(window).scroll(function() {
// 		if ($(this).scrollTop() >= 600) { 
// 			$('.nav').css('background-color', 'rgba(25,25,25, 1)');
// 		} else if ($(this).scrollTop() < 600 && $(this).scrollTop() > 100) {
// 			$('.nav').css('background-color', 'rgba(25,25,25, .75)');
// 		}
// 	});
	
	
	
// 	//Show-hide submunu registration*****************************
// 	$('#registration-btn').click(function() {
// 		$('#submenu').addClass('showMenu');
// 		$('.nav__popup-menu').show();
// 		$('html').css('overflow', 'hidden');
// 	});

// 	function show() {
// 		$('#submenu').addClass('showMenu');
// 		$('.nav__popup-menu').hide();
// 		$('html').css('overflow', 'hidden');

// 	}
// 	//show-hide form************************************************
// 	$('.showDoc1').click(function() {
// 		show();
// 		$('#popup1').show('fast', 'linear');
// 	});
// 	$('.showDoc2').click(function() {
// 		show();	
// 		$('#popup2').show('fast', 'linear');
// 	});
// 	$('.showDoc3').click(function() {
// 		show();
// 		$('#popup3').show('fast', 'linear');
		
// 	});
// 	$('.btn-close').click(function() {
// 		$('.popup1').hide();
// 		$('html').css('overflow', 'visible');
// 		$('#submenu').removeClass('showMenu');

// 	});

	
	
		
// 	//Accardion submenu**************************************  
// 	$('.burger-wrap__submenu').click(function(event){
// 		$(this).toggleClass('active');
// 		$(this).next().slideToggle(300);
// 	});  



// 	//Accardion text show*************************************
// 	$('.questions__item').click(function(event){
// 		// $(this).toggleClass('active');
// 		$(this).next().slideToggle();
// 		$(this).toggleClass('minus');
// 	});

});


