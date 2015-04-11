$(document).ready(function() {

  var winH = $(window).height();

  // The Love Wrapper
  $('#love-wrapper').css({height: winH});

  // The Love Slider
  $('.flexslider').flexslider();

  // The Love Menu
  $('#love-menu').css({height: winH});
  $('.icon-menu').click(function(e){
  	e.preventDefault();
  	$(this).addClass('off');
  	$('.icon-close-modal').addClass('on');
    $('.love-modal').removeClass('open');
  	$('#love-menu').addClass('on');
  });
  $('.icon-close-modal').click(function(e){
  	e.preventDefault();
  	$(this).removeClass('on');
  	$('.icon-menu').removeClass('off');
  	$('#love-menu').removeClass('on');
    $('.love-modal').removeClass('open');
  });
  $('.icon-logo').click(function(e){
    e.preventDefault();
    $('.icon-menu').removeClass('off');
    $('.icon-close-modal').removeClass('on');
    $('#love-menu').removeClass('on');
    $('.love-modal').removeClass('open');
  });

  $('.nav-link').click(function(e){
    var target = $(this).attr('href');
    e.preventDefault();
    $('.love-modal').removeClass('open');
    $('#love-menu').removeClass('on');
    $('#' + target).addClass('open');
  });

  // Nice scroll
  $('#creative-lovers, #about, #contact').niceScroll({
    cursorcolor: '#fff',
    cursorborder: 'none',
    cursorborderradius: '0'
  });

  var scrolled = 0;
  $('.icon-arrow-down').click(function(){
      scrolled = scrolled+300;
        $('#creative-lovers').animate({
          scrollTop:  scrolled
     });
   });

  // Social shares
  if(Modernizr.touch){
    $('.icon-share').click(function(e){
      e.preventDefault();
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $('#love-links, #love-triangle').removeClass('on');
      } else {
        $(this).addClass('open');
        $('#love-links, #love-triangle').addClass('on');
      }
    });
  } else {
    $('.icon-share').hover(
      function(){
        $(this).addClass('on');
        $('#love-links, #love-triangle').addClass('on');
      },
      function(){
        $(this).removeClass('on');
        $('#love-links, #love-triangle').removeClass('on');
      }
    );
  }
  

});

$(window).resize(function(){

  var winH = $(window).height();

  // The Love Wrapper
  $('#love-wrapper').css({height: winH});

  // The Love Menu
  $('#love-menu').css({height: winH});

});
