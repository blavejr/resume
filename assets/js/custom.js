var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

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
            scrollTop: $("#aboutmeSection").offset().top - 110
        }, 2000);
    });

    // Smooth scroll
    $("#aboutBTN").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutmeSection").offset().top - 110
        }, 2000);
    });

    // Smooth scroll
    $("#experienceBTN").click(function() {
        $('html, body').animate({
            scrollTop: $("#experienceSection").offset().top - 110
        }, 2000);
    });

    // Smooth scroll
    $("#projectsBTN").click(function() {
        $('html, body').animate({
            scrollTop: $("#projectsSection").offset().top - 110
        }, 2000);
    });

    // Smooth scroll
    $("#skillsBTN").click(function() {
        $('html, body').animate({
            scrollTop: $("#skillsSection").offset().top - 110
        }, 2000);
    });

    // Smooth scroll
    $("#acomplishmentsBTN").click(function() {
        $('html, body').animate({
            scrollTop: $("#acomplishmentsSection").offset().top - 110
        }, 2000);
    });

    $(window).scroll(function() {
      console.log(this.scrollY);
      if (this.scrollY > 200 && this.scrollY < 300 ) {

        animateOnAction('h1.display-5', 'animated rubberBand');
      }
  });

  });
