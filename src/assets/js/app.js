import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
//import libs from './lib/dependancies';
//window.libs = libs;
$(document).foundation();

$(function() {

/*
==================================================
================================================== Scrolling Slideshow Animation
==================================================
*/

//  if ($('.wait-for-me').length > 0) {
//    setTimeout(function(){
//      $('body').removeClass('fade');
//    }, 5000);
//    Foundation.onImagesLoaded($('.wait-for-me'), function(){
//      var scrolled = false;
//      positionVideo();
//      $('body').removeClass('fade');
//      if ($('#hero-slideshow')) { //if there is a slideshow
//        sizeLanding(); //Size the slideshow to the browser window
//        $(window).resize(function() { //resize slideshow on window resize
//          if (!scrolled) {
//            positionVideo();
//          }
//          sizeSlideshow();
//        });
//        $(window).scroll(function() { //shrink slideshow on scroll
//          if (!scrolled) {
//            scrolled = true;
//            sizeSlideshow();
//            return scrolled;
//          }
//        });
//        $('.slide').click(function() { //shrink slideshow on click
//          if (!scrolled) {
//            scrolled = true;
//            sizeSlideshow();
//            return scrolled;
//          }
//        });
//      }
//    });
//  } else {
//    $('body').removeClass('fade');
//  }
//  if (window.location.href.indexOf('#') != -1) {
//    $('#landing-video-container').remove();
//    sizeSlideshow();
//  }
//


/*
==================================================
================================================== Reveal top bar logo after scrolling past hero logo
==================================================
*/
//
//$.fn.exists = function () {
//    return this.length !== 0;
//}
//
//$(function() {
//  if ( $('#no-js-hero-image').exists() ) {
//    var $nav = $('#nav-bar'),
//        $logo = $('.logo'),
//        $hero = $('#no-js-hero-image');
//
//      $nav.addClass('hidden');
//
//    $(window).scroll(function() {
//      var logoY = $logo.offset().top,
//          heroY = $hero.offset().top;
//      if ( logoY < (heroY + 250) ) {
//        $nav.addClass('hidden');
//      } else {
//        $nav.removeClass('hidden');
//      }
//    });
//  }
//});


/*
==================================================
================================================== Slideshow Animation
==================================================
*/
//$(function() {
//  $('#hero-slideshow > .slide:gt(0)').hide();
//  var counter = 0;
//  var nSlides = $('.slide').length; 
//  setInterval(function() {
//    counter++;
//    $('#hero-slideshow > .slide:first')
//      .fadeOut(2000)
//      .next()
//      .fadeIn(2000)
//      .end()
//      .appendTo('#hero-slideshow');
//    if (counter == 1) {
//      $('#landing-logo-animation').fadeOut(500);
////      remove();
//      sizeSlideshow();
//    }
//  }, 4000);
//});

/*
==================================================
================================================== Smooth Scroll to Anchor
==================================================
*/ 

//$(document).on('click', 'a[href^="#section"]', function (event) {
//  event.preventDefault();
//  $('html, body').animate({
//    scrollTop: $($.attr(this, 'href')).offset().top
//  }, 500);
//});

/*
==================================================
================================================== AJAX Modal
==================================================
*/ 

//
//$('.TODO').on('click', function() {
//  $.ajax('TODO.html').
//    done(function(content) {
//      $('#modal').html(content).foundation('open');
//  });
//})
//
//$('[data-reveal]').on('open.zf.reveal', function () {
//  $(document).foundation(); // reinitialize foundation for form validation
//  _ictt.push(['_allocate']); // reallocate Infitiny tracking for dymanic phone number
//});
//

/*
==================================================
================================================== Inquire Splash
==================================================
*/ 

//$('#special-inquire-button').on('click', function() {
//  $('#inquire-splash').addClass('open');
//})
//
//$('[data-reveal]').on('closed.zf.reveal', function () {
////  var modal = $(this);
//  $('#inquire-splash').removeClass('open');
//});

/*
==================================================
================================================== Form Handling
==================================================
*/ 
//
//let input_selector =
//  'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
//
//var inputUI = function () {
//  let inputs = $(input_selector);
//  inputs.each(function(index, el) {
//    let $this = $(this);
//    if (
//      el.value.length > 0 ||
//      $(el).is(':focus') ||
//      el.autofocus ||
//      $this.attr('placeholder') !== ""
//    ) {
//      $this.addClass('full'); //console.log('added full to input ' + index);
//    } else {
//      $this.removeClass('full'); //console.log('removed full from input ' + index);
//    }
//  });
//}
//
//$(function() {
//  inputUI();
//});
//
//document.addEventListener('focus', function(e) {
//    if ($(e.target).is(input_selector)) {
//      $(e.target).addClass('full');
//    }
//  }, true);
//
//document.addEventListener('blur', function(e) {
//    let $inputElement = $(e.target);
//    if ($inputElement.is(input_selector)) {
//      if (
//        $inputElement[0].value.length === 0 &&
//        $inputElement.attr('placeholder') === ""
//      ) {
//        $inputElement.removeClass('full');
//      }
//    }
//  },true);
//
//$(function(){
//  if(window.location.href.indexOf('#form-submission-successful') != -1) {
//    $.ajax('form-submission-successful-modal.html').
//      done(function(content) {
//        $('#instant-modal').html(content).foundation('open');
//    });
//    window.location.hash=""; 
//  }
//});

// HTML DOM FORM RESET handling
//$(document).on('reset', function(e) {
//  let formReset = $(e.target);
//  if (formReset.is('form')) {
//    formReset
//      .find(input_selector)
//      .removeClass('valid')
//      .removeClass('invalid');
//    formReset.find(input_selector).each(function(e) {
//      if (this.value.length) {
//        $(this)
//          .removeClass('full');
//      }
//    });
//
//    // Reset select (after native reset)
//    setTimeout(function() {
//      formReset.find('select').each(function() {
//        // check if initialized
//        if (this.M_FormSelect) {
//          $(this).trigger('change');
//        }
//      });
//    }, 0);
//  }
//});

//libs.AOS.init();
//
//// SVG Injector
//// Elements to inject
//var mySVGsToInject = document.querySelectorAll('img.inject-me');
//
//// Options
//var injectorOptions = {
//  evalScripts: 'once',
//  pngFallback: 'assets/png'
//};
//
//var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
//  // Callback after all SVGs are injected
//  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
//};
//
//var perInjectionCallback = function (svg) {
//  // Callback after each SVG is injected
//  console.log('SVG injected: ' + svg);
//};
//
//// create injector configured by options
//var injector = new libs.svgInjector(injectorOptions);
//
//// Trigger the injection
//injector.inject(
//  mySVGsToInject,
//  afterAllInjectionsFinishedCallback,
//  perInjectionCallback
//);
  
});