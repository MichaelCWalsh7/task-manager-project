$(document).ready(function () {
  $('.sidenav').sidenav({
    edge: "right"
  });
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.datepicker').datepicker({
    showClearBtn: true,
    yearRange: 3,
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });
});