//LOADER
// var myVar;
//
// function pageShow() {
// myVar = setTimeout(showPage, 3000);
// }
//
// function showPage() {
//
// document.getElementById("loader").style.display = "none";
// document.getElementById("tree-page").style.display = "block";
// }
//LOADER

$(document).ready(function(){

  $('.home').click(function(){
    $('html,body').animate({scrollTop: $('.front').offset().top},1000);
  });
  $('.trees').click(function(){
    $('html,body').animate({scrollTop: $('.section-content').offset().top},1000);
  });
  $('.about').click(function(){
    $('html,body').animate({scrollTop: $('.section-about').offset().top},1000);
  });
  $('.contact').click(function(){
    $('html,body').animate({scrollTop: $('.section-contact').offset().top},1000);
  });


  $('.section-content').waypoint(function(direction){
    if(direction == "down"){
    $('.stickynull').addClass('sticky');
    $('.stickynull').addClass('animated fadeIn');
    $('.banyan').addClass('info-tree-on animated fadeIn');
  }
  else{
    $('.stickynull').removeClass('sticky');

  }
  },{
    offset: '60px;'
  });



});



var cn =1;



$('.scroll-name').on('scroll', function(event){


  var s = $('.scroll-name').scrollTop(),
      d = $(document).height(),
      c = $('.scroll-name').height();

      console.log(s);

  var scrollPercent = (s / (d - c)) * 100;


//for image fade in
  if(s < 80 ){


    $('.banyan').addClass('info-tree-on');
    $('.banyan').addClass('animated fadeIn');

  }
  else{

    $('.banyan').removeClass('info-tree-on');

  }

  if(s > 80 && s < 225){


    $('.oak').addClass('info-tree-on');
    $('.oak').addClass('animated fadeIn');
  }
  else{

    $('.oak').removeClass('info-tree-on');

  }


  if(s > 230 && s < 380 ){


    $('.mahagony').addClass('info-tree-on');
    $('.mahagony').addClass('animated fadeIn');
  }
  else{

    $('.mahagony').removeClass('info-tree-on');

  }



  if(s > 385 && s < 545){


    $('.sandalwood').addClass('info-tree-on');
    $('.sandalwood').addClass('animated fadeIn');
  }
  else{

    $('.sandalwood').removeClass('info-tree-on');

  }

  if(s >548 ){


    $('.teak').addClass('info-tree-on');
    $('.teak').addClass('animated fadeIn');
  }
  else{

    $('.teak').removeClass('info-tree-on');

  }


// for button fadein

    if(s < 80 ){

      $('.banyan-parent').addClass('animate');

    }
    else{
    $('.banyan-parent').removeClass('animate');

    }

    if(s > 70 && s < 246){

      $('.oak-parent').addClass('animate');
    }
    else{
      $('.oak-parent').removeClass('animate');


    }


    if(s > 225 && s < 401 ){

    $('.mahagony-parent').addClass('animate');
    }
    else{
    $('.mahagony-parent').removeClass('animate');
    }



    if(s > 382 && s < 566){

    $('.sandalwood-parent').addClass('animate');
    }
    else{
    $('.sandalwood-parent').removeClass('animate');

    }

    if(s >548  ){

    $('.teak-parent').addClass('animate');
    }
    else{
    $('.teak-parent').removeClass('animate');

    }










});
