$(function(){

	var $modal = $('<div class="modal">' +
		'<div class="modal__content">' +
			'<img class="modal__img" src="">' +
		'</div>' + 
		'<button class="modal__close">Close</button>' +
	'</div>');
	var $modalImg = $modal.find('.modal__img');
	
	$modal.find('.modal__close').on('click', function(){
		$modal.detach();
		$('body').removeClass('uscrollable')
	});

	$('.projects__galery-elem').on('click', function(){
		var $img = $(this).children('.projects__galery-img');
		if (!$img.length) {
			return;
		}
		$modalImg.attr('src', $img.attr('src'));

		$('body')
			.addClass('uscrollable')
			.append($modal);
	});
});