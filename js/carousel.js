document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = {'padding':20, 'dist': -20, 'shift': 5};
  var instances = M.Carousel.init(elems, options);
});

