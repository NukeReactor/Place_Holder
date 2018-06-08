$(function() {
	$(".hidden").slideToggle();
});

$(function() {
	$("#menuToggle").click(function() {
		$(".navbar").slideToggle(500);
		$(".hidden").slideToggle(500);
	});
});

$(function() {
	$(".showMenu").click(function() {
		$(".navbar").slideToggle(500);
		$(".hidden").slideToggle(500);
	})
});
