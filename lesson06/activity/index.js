$(document).ready(function() {
  $("#submit").attr('disabled', true);
  $("#clickMe").click(function(){
    $("#submit").removeAttr('disabled');
    $('[data-toggle="tooltip"]').tooltip('disable');
  })

  console.log('working in');
});

console.log('working out');
