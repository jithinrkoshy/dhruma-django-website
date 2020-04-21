var myVar;

function pageShow() {
myVar = setTimeout(showPage, 3000);
}

function showPage() {
$('#loader').fadeOut("slow");
//document.getElementById("loader").style.display = "none";
document.getElementById("tree-page").style.display = "block";
}

$(document).ready(function(){

  $('.js--slide-down').click(function(){
    $('html,body').animate({scrollTop: $('.section-slide').offset().top},1000);
  });

});

var s=-1;

function slide(dir){
    if(dir=='right'){

    s=(s+1)%3;
    if(s==0){
      $('.slider1').removeClass('show');
      $('.slider1').removeClass('animated fadeInRight');
      $('.slider1').removeClass('animated fadeInLeft');
      $('.slider2').addClass('show');
      $('.slider2').addClass('animated fadeInLeft');
    }
    else if(s==1){
      $('.slider2').removeClass('show');
      $('.slider2').removeClass('animated fadeInRight');
      $('.slider2').removeClass('animated fadeInLeft');
      $('.slider3').addClass('show');
      $('.slider3').addClass('animated fadeInLeft');
    }
    else if(s==2){

      $('.slider3').removeClass('show');
      $('.slider3').removeClass('animated fadeInRight');
      $('.slider3').removeClass('animated fadeInLeft');
      $('.slider1').addClass('show');
      $('.slider1').addClass('animated fadeInLeft');

    }
  }
  else{
    s=s-1;
    if(s<0){
      s=2;
    }
    if(s==0){
      $('.slider1').removeClass('show');
      $('.slider1').removeClass('animated fadeInLeft');
      $('.slider1').removeClass('animated fadeInRight');
      $('.slider3').addClass('show');
      $('.slider3').addClass('animated fadeInRight');
    }
    else if(s==1){
      $('.slider2').removeClass('show');
      $('.slider2').removeClass('animated fadeInLeft');
      $('.slider2').removeClass('animated fadeInRight');
      $('.slider1').addClass('show');
      $('.slider1').addClass('animated fadeInRight');
    }
    else if(s==2){

      $('.slider3').removeClass('show');
      $('.slider3').removeClass('animated fadeInLeft');
      $('.slider3').removeClass('animated fadeInRight');
      $('.slider2').addClass('show');
      $('.slider2').addClass('animated fadeInRight');

    }
  }


}
