document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {fullWidth: true,
                   indicators: true,
                   'duration': 200,
                   'dist': 0,}
    var instances = M.Carousel.init(elems, options);
  });