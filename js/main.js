

// МЕНЮ

$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
  
});


$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

$(function() {
    $('.button').click(function() {
      $('.adv, .adv-three').css('background','red');
      $('.adv, .adv-three').animate({
        margin:'500px'
      }, 6600 )
    });

    $(window).scroll(function() {
    $(".adv, .adv-three").each(function() {
      var elPos = $(this).offset().top;
      var top0fWindow = $(window).scrollTop();
      if (elPos < top0fWindow + 700) {
        $(this).addClass("fadeInLeft"); 
      }
    });
  });

});



$(function() {
    $('.button').click(function() {
      $('.adv-two, .adv-four').css('background','red');
      $('.adv-two, .adv-four').animate({
        margin:'500px'
      }, 6600 )
    });

    $(window).scroll(function() {
    $(".adv-two, .adv-four").each(function() {
      var elPos = $(this).offset().top;
      var top0fWindow = $(window).scrollTop();
      if (elPos < top0fWindow + 700) {
        $(this).addClass("fadeInRight"); 
      }
    });
  });

});



$(function() {
    $('.button').click(function() {
      $('.adv, .adv-three, .quality-static').css('background','red');
      $('.adv, .adv-three, .quality-static').animate({
        margin:'500px'
      }, 6600 )
    });

    $(window).scroll(function() {
    $(".adv, .adv-three, .quality-static").each(function() {
      var elPos = $(this).offset().top;
      var top0fWindow = $(window).scrollTop();
      if (elPos < top0fWindow + 700) {
        $(this).addClass("fadeInLeft"); 
      }
    });
  });

});


$(function() {
    $('.button').click(function() {
      $('.to-order, .footer__form').css('background','red');
      $('.to-order, .footer__form').animate({
        margin:'500px'
      }, 6600 )
    });

    $(window).scroll(function() {
    $(".to-order, .footer__form").each(function() {
      var elPos = $(this).offset().top;
      var top0fWindow = $(window).scrollTop();
      if (elPos < top0fWindow + 700) {
        $(this).addClass("fadeIn"); 
      }
    });
  });

});
