$(document).ready(function(){

    $(".couter").each(function() {
      var $this = $(this),
  
          countTo = $this.attr("data-count");
  
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
  
      {
        duration: 3000,
        easing:"linear",
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  });

  $('a').click(function (e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
          menuHeight = $('.navbar').innerHeight();
  
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 700);
  });

  $('#botao-1').on('click', function(){
    $('#texto-1').show();
    $('#texto-2').hide();
    $('#texto-3').hide();
    $('#texto-4').hide();
    $('#texto-5').hide();
    $('#texto-6').hide();
  });
  
  $('#botao-2').on('click', function(){
    $('#texto-1').hide();
    $('#texto-2').removeClass('d-none')
    $('#texto-2').show();
    $('#texto-2').show();
    $('#texto-3').hide();
    $('#texto-4').hide();
    $('#texto-5').hide();
    $('#texto-6').hide();
  });
  
  $('#botao-3').on('click', function(){
    $('#texto-1').hide();
    $('#texto-2').hide();
    $('#texto-3').removeClass('d-none')
    $('#texto-3').show();
    $('#texto-4').hide();
    $('#texto-5').hide();
    $('#texto-6').hide();
  });
  
  $('#botao-4').on('click', function(){
    $('#texto-1').hide();
    $('#texto-2').hide();
    $('#texto-3').hide();
    $('#texto-4').removeClass('d-none')
    $('#texto-4').show();
    $('#texto-5').hide();
    $('#texto-6').hide();
  });
  
  $('#botao-5').on('click', function(){
    $('#texto-1').hide();
    $('#texto-2').hide();
    $('#texto-3').hide();
    $('#texto-4').hide();
    $('#texto-5').removeClass('d-none')
    $('#texto-5').show();
    $('#texto-6').hide();
  });
  
  $('#botao-6').on('click', function(){
    $('#texto-1').hide();
    $('#texto-2').hide();
    $('#texto-3').hide();
    $('#texto-4').hide();
    $('#texto-5').hide();
    $('#texto-6').removeClass('d-none')
    $('#texto-6').show();
    });
