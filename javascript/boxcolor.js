$('.project-box').each(function(index, element) {
	var hue = Math.floor(Math.random() * 360);
	var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
    $(this).css("background-color", pastel);
});

if($("body").width() > 1100){
	$(".project-box").hover(function(){
		$(this).animate({opacity: 1}, 300);
		$(this).children(".project-head").css("display", "none");
		$(this).children(".project-desc").css("display", "table-cell");
	},function(){
		$(this).animate({opacity: 0.5}, 300)
		$(this).children(".project-head").css("display", "table-cell");
		$(this).children(".project-desc").css("display", "none");
	})


}
