$(document).ready(function() {

  $('.parallax').parallax();

  $('.carousel.carousel-slider').carousel({full_width: true});

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  // $('.collapsible').collapsible();

  //   // Show sideNav
  // $('.button-collapse').sideNav('show');
  // // Hide sideNav
  // $('.button-collapse').sideNav('hide');
        


  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );






});