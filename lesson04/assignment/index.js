$(document).ready(function() {

  // click event for "cheers!" button
  $("#button-click").click(function() {

      // adds a class to the left pint to begin animation, removes class after 2.5 seconds
      $(".main__left-pint").addClass('animate-left');
      setTimeout(removeClass, 2500);

      // adds a class to the right pint to begin animation, removes class after 2.5 seconds
      $(".main__right-pint").addClass('animate-right');
      setTimeout(removeClass, 2500);

      // adds a class to the "clink!" headline with a delay of 1.15 seconds
      setTimeout(function() {
        $(".clink").addClass('clink-appear');
      }, 1150);


  });

  // removes all classes that were added in click event
  function removeClass() {
    $(".main__left-pint").removeClass('animate-left');
    $(".main__right-pint").removeClass('animate-right');
    $(".clink").removeClass('clink-appear');
  };
});
