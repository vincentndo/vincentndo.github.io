jQuery(document).ready(function($) {

	'use strict';

    $(function() {

      // Vars
      var modBtn  = $('#modBtn'),
          modal   = $('#modal'),
          close   = modal.find('.close-btn img'),
          modContent = modal.find('.modal-content');
      
      // open modal when click on open modal button 
      modBtn.on('click', function() {
        modal.css('display', 'block');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
      });
      
      // close modal when click on close button or somewhere out the modal content 
      $(document).on('click', function(e) {
        var target = $(e.target);
        if(target.is(modal) || target.is(close)) {
          modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
            modal.css('display', 'none');
            next();
          });
        }
      });
      
    });


    // // on click event on all anchors with a class of scrollTo
    // $('a.scrollTo').on('click', function(){
      
    //   // data-scrollTo = section scrolling to name
    //   var scrollTo = $(this).attr('data-scrollTo');

    //   // toggle active class on and off
    //   $( "a.scrollTo" ).each(function() {
    //     if(scrollTo == $(this).attr('data-scrollTo')){
    //       $(this).addClass('active');
    //     }else{
    //       $(this).removeClass('active');
    //     }
    //   });

    //   // animate and scroll to the sectin 
    //   $('body, html').animate({
    //     // the magic - scroll to section
    //     scrollTop: $('#'+scrollTo).offset().top
    //   }, 1000 );
    //   return false;
      
    // })


    $('a.scrollTo').on('click', function(e) {
      e.preventDefault();

      $('a.scrollTo').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = $(this.hash);
      $('body, html').stop().animate({
        scrollTop: target.offset().top
      }, 1000, "swing", function() {
        $(document).on("scroll", onScroll);
      });

    });


    $(".menu-icon").click(function() {
      $(this).toggleClass("active");
      $(".overlay-menu").toggleClass("open");
    });


    function inPos(scrollPos, ref) {
      return scrollPos >= ref.position().top && scrollPos < ref.position().top + ref.height();
    }

    function onScroll(event) {

      var scrollPos = $(document).scrollTop();

      $("a.scrollTo").each(function() {

        var cur = $(this);
        var ref = $(cur.attr("href"));

        if ( inPos(scrollPos, ref) ) {
          cur.css("text-shadow", "");
          cur.addClass("font-effect-neon");
        } else {
          cur.removeClass("font-effect-neon");
          cur.css("text-shadow", "4px 4px 4px #aaa");
        }
      });

    };

    $(document).on("scroll", onScroll);

    $("a.scrollTo").each(function() {
      var cur = $(this);
      if (cur.attr("href") == "#top") {
        cur.addClass("font-effect-neon");
      } else {
        cur.css("text-shadow", "4px 4px 4px #aaa");
      }
    });

    $("a.scrollTo").hover(
      function(){

        var scrollTop = $(document).scrollTop();
        var cur = $(this);
        var ref = $(cur.attr("href"));

        if ( !inPos(scrollTop, ref) ) {
          $(this).css("text-shadow", "");
          $(this).addClass("font-effect-neon");
        };
        
      },
      function(){

        var scrollTop = $(document).scrollTop();
        var cur = $(this);
        var ref = $(cur.attr("href"));

        if ( !inPos(scrollTop, ref) ) {
          $(this).removeClass("font-effect-neon");
          $(this).css("text-shadow", "4px 4px 4px #aaa");
        };

      }
    );


    // for (let i = 0; i < 5; i++) {
    //   var randomMP4 = "vid/vid_" + Math.floor(Math.random() * 12) + ".mp4";
    //   var videoId = 'v' + i;
    //   var sourceId = 's' + i;
      
    //   $('#' + sourceId).attr('src', randomMP4);
    //   $('#' + videoId)[0].load();
    //   $('#' + videoId)[0].play();
    // }

    $("video").each(function() {
      var randomMP4 = "vid/vid_" + Math.floor(Math.random() * 12) + ".mp4";
      $(this).find("source").attr("src", randomMP4);
      $(this)[0].load();
      $(this)[0].play();
    })

});
