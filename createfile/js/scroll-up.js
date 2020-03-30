  // スクロールアップ
    $(function(){
        $(window).scroll(function (){
          $('.content').each(function(){
              var elemPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 300){
                  $(this).addClass('effect-scroll');
              }
          });
        });
      });