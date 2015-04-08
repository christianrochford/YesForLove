$(document).ready(function() {

  var winH = $(window).height();

  // The Love Wrapper
  $('#love-wrapper').css({height: winH});

  // The Love Slider
  $('.flexslider').flexslider();

  // The Love Menu
  $('#love-menu').css({height: winH});
  $('.icon-menu2').click(function(e){
  	e.preventDefault();
  	$(this).addClass('off');
  	$('.icon-close-modal').addClass('on');
    $('.love-modal').removeClass('open');
  	$('#love-menu').addClass('on');
  });
  $('.icon-close-modal').click(function(e){
  	e.preventDefault();
  	$(this).removeClass('on');
  	$('.icon-menu2').removeClass('off');
  	$('#love-menu').removeClass('on');
    $('.love-modal').removeClass('open');
  });

  $('.nav-link').click(function(e){
    var target = $(this).attr('href');
    e.preventDefault();
    $('.love-modal').removeClass('open');
    $('#love-menu').removeClass('on');
    $('#' + target).addClass('open');
    $('.icon-menu2').removeClass('off');
    $('.icon-close-modal').removeClass('on');
  });

});

$(window).resize(function(){

  var winH = $(window).height();

  // The Love Wrapper
  $('#love-wrapper').css({height: winH});

  // The Love Menu
  $('#love-menu').css({height: winH});

});
