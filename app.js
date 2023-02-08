$(() => {

// farway hide/show function
$('.far').on('click', function () {
	$('.infoF').toggleClass("hidden");
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

});