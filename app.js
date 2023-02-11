$(() => {

	///////////resume functions
	// farway hide/show function
	$('.far').on('click', function () {
		$('.infoF').toggleClass('hidden');
	});
	// tesdell hide/show function
	$('.tes').on('click', function () {
		$('.infoE').toggleClass('hidden');
	});

	$('.bay').on('click', function () {
		$('.infoB').toggleClass('hidden');
	});

	$('.pez').on('click', function () {
		$('.infoP').toggleClass('hidden');
	});

	$('.cas').on('click', function () {
		$('.infoC').toggleClass('hidden');
	});
	////////////home page carasel functions///////////

	console.log('corgi carousel connected to app.js!');

	let currentImgIndex = 0;
	let numOfImages = $('.carousel-images').children().length - 1;

	$('.next').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
		//  currentImgIndex++;

		if (currentImgIndex < numOfImages) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0;
		}

		$('.carousel-images')
			.children()
			.eq(currentImgIndex)
			.css('display', 'block');

		// stuff will go here
	});
	$('.previous').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = numOfImages;
		}

		$('.carousel-images')
			.children()
			.eq(currentImgIndex)
			.css('display', 'block');

		// stuff will go here
	});


});
