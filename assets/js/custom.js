var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var offset = 110;
var currentWidth;

function animateOnAction(tag, animationName) {
  $(tag).addClass(animationName).one(animationEnd, () => {
    $(tag).removeClass(animationName);
  });
}

function removeClass(tag, className) {
  $(tag).removeClass(className);
}


$('document').ready(() => {

  // Smooth scroll
  $("#topBTN").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  // Smooth scroll
  $("#aboutBTN").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutmeSection").offset().top + offset
    }, 2000);
  });

  // Smooth scroll
  $("#experienceBTN").click(function() {
    $('html, body').animate({
      scrollTop: $("#experienceSection").offset().top + offset
    }, 2000);
  });

  // Smooth scroll
  $("#projectsBTN").click(function() {
    $('html, body').animate({
      scrollTop: $("#projectsSection").offset().top + offset
    }, 2000);
  });

  // Smooth scroll
  $("#skillsBTN").click(function() {
    $('html, body').animate({
      scrollTop: $("#skillsSection").offset().top + offset
    }, 2000);
  });

  // Smooth scroll
  $("#accomplishmentsBTN").click(function() {
    $('html, body').animate({
      scrollTop: $("#accomplishmentsSection").offset().top + offset
    }, 2000);
  });

  // Get initial width of the screen
  currentWidth = $(window).width();
  if (currentWidth < 767) {
    offset = -70;
  } else {
    offset = -110;
  }

// if user changes the width whilest the app is open
  $(window).resize(function() {
    // This will execute whenever the window is resized
    if ($(window).width() < 767) {
      offset = -70;
    } else {
      offset = -110;
    }
    console.log(offset);
    $(window).width(); // New width
  });

  //Hide
    $('#nav_bar').on('click', function(){
      if ($(window).width() < 767) {
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
      }

  });

});
