// Exercise 1
// Change the font color of "Fruity website" to purple 
$(".title").css("color", "purple");

// Exercise 2
// Make the white div hide with an animation when you hover over it
// and unhide when you stop hovering over it
// (there are multiple ways to do this)
$(".randomwhitediv").on("mouseenter", function() {
	$(this).animate({"opacity":"0"});
});
$(".randomwhitediv").on("mouseleave", function() {
	$(this).animate({"opacity":"1"});
});


// Exercise 3
// When the user writes text in the input box
// and clicks the "GO!" button, display the text
// in the white div
$("button").on("click", function() {
	var text = $("input").val();
	$(".randomwhitediv").text(text);
});