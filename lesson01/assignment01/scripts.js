$(document).ready(function() {

  // set up an array and assigned variables for input boxes, submit buttons and span element
  const array1 = [3, 11, 33, 36],
        input1 = $('.input1'),
        submit1 = $('.submit1'),
        includesVal = $('.included');

  // click event on the submit button
  submit1.on('click', function() {
    // collect the input value
    const val = input1.val();
    // parse the input into a number
    const num1 = parseInt(val);

    // make sure user gave a real number
    if(!isNaN(num1)) {
      // use includes to see if the value input by the user is in the array
      const found = array1.includes(num1);
      // display true or false to the user
      includesVal.text(found);
      // reset the input box to nothing
      input1.val('');
    }
  });

  // set up a new array and a new variable for the span element
  const array2 = [2, 4, 6, 8],
        input2 = $('.input2'),
        submit2 = $('.submit2'),
        mulVal = $('.multiplied');

  // click event on the submit button
  submit2.on('click', function() {
    // collect the input value
    const multiply = input2.val();
    // parse the input into a number
    const num2 = parseInt(multiply);

    // make sure user gave a real number
    if(!isNaN(num2)) {
      // use map to create a new array which multiplies each element in array2 by the number the user inputs
      const mapArray = array2.map(element => element * num2);
      // display the new array to the user
      mulVal.text(mapArray);
      // reset the input box to nothing
      input2.val('');
    }
  });

  // set up a new array and a new variable for the span element
  const array3 = [1, 7, 9, 13, 23, 55, 67, 89, 101, 200],
        input3 = $('.input3'),
        submit3 = $('.submit3'),
        lessThan = $('.filtered');

  // click event on the submit button
  submit3.on('click', function() {
    // collect the input value
    const filterVal = input3.val();
    // parse the input into a number
    const num3 = parseInt(filterVal);

    // make sure user gave a real number
    if(!isNaN(num3)){
      // use filter to return the numbers in the array that are less than the input value
      const filterArray = array3.filter(element => element < num3);
      // display the numbers to the user
      lessThan.text(filterArray);
      // reset the input box to nothing
      input3.val('');
    }
  });

  // set up a new array and a new variable for the span element
  const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        input4 = $('.input4'),
        submit4 = $('.submit4'),
        reduceVal = $('.added');

  // click event on the submit button
  submit4.on('click', function() {
    // collect the input value
    const sumVal = input4.val();
    // parse the input into a number
    const num4 = parseInt(sumVal);

    // make sure user gave a real number
    if(!isNaN(num4)) {
      // add the number to the array
      array4.push(num4);
      // use reduce to add all the numbers in the array into one number
      const totalSum = array4.reduce((acc, element) => acc + element);
      // display the number to the user
      reduceVal.text(totalSum);
      // reset the input box to nothing
      input4.val('');
    }
  });
});
