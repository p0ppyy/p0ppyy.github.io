var date = new Date();
var time = date.getSeconds();
$(document).ready(function() {
	changeBackground();
});

function changeBackground(){
	if($(this).width() > 1100){
		if(time % 2 > 0){
			$("body").css("background-image", "url('image/bg1.png')" );
		}else{
			$("body").css("background-image", "url('image/bg2.png')");
		}
	}else {
		$("body").css("background-image", "none");
	}

}
