document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var options = {
      setDefaultDate: true,
      format: 'dddd dd mmmm yyyy',
      i18n: {months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      selectMonths: true,
      selectYears: 100,
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Ok',
      labelMonthNext: 'Siguiente mes',
      labelMonthPrev: 'Mes anterior',
      labelMonthSelect: 'Selecciona un mes',
      labelYearSelect: 'Selecciona un año'}
    }
    var instances = M.Datepicker.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var options;
    var instances = M.Timepicker.init(elems, options);
  });
