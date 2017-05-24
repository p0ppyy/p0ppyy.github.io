var open = false;


function openMenu() {
  if(!open){
    $(".dropdown").slideDown("slow");
    open = true;
  }
  else {
    $(".dropdown").slideUp("slow");
    open = false;
  }

}

function closeMenu() {
  $(".dropdown").slideUp("slow");
}


function moveDown(){
  $('html, body').animate(
    {scrollTop: $("#text-right").offset().top},
    1000);
}
