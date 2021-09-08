(function($) { // Begin jQuery
    document.querySelector(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      document.querySelector('nav ul li a:not(:only-child)').click(function(e) {
        document.querySelector(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        document.querySelector('.nav-dropdown').not(document.querySelector(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      document.querySelector('html').click(function() {
        document.querySelector('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      document.querySelector('#nav-toggle').click(function() {
        document.querySelector('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery