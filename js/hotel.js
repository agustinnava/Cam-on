document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,{
         setDefaultDate: true,
         format: 'dddd dd mmmm yyyy',
        });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var options;
    var instances = M.Timepicker.init(elems, options);
  });