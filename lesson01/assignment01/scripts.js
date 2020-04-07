$(document).ready(function() {

  // set up an array and assigned variables for input boxes, submit buttons and span element
  const array1 = [3, 11, 33, 36],
        input = $('.input')
        submit = $('.submit')
        includesVal = $('.included');

  // click event on the submit button
  submit.on('click', function() {
    // collect the input value
    const val = input.val();
    // use includes to see if the value input by the user is in the array
    const found = array1.includes(element => element === val);
    // display true or false to the user
    includesVal.text(found);
    // reset the input box to nothing
    input.val('');
  });

  // set up a new array and a new variable for the span element
  const array2 = [2, 4, 6, 8],
        mulVal = $('.multiplied');

  // click event on the submit button
  submit.on('click', function() {
    // collect the input value
    const multiply = input.val();
    // use map to create a new array which multiplies each element in array2 by the number the user inputs
    const mapArray = array2.map(element => element * multiply);
    // display the new array to the user
    mulVal.text(mapArray);
    // reset the input box to nothing
    input.val('');
  });

  // set up a new array and a new variable for the span element
  const array3 = [1, 7, 9, 13, 23, 55, 67, 89, 101, 200],
        lessThan = $('.filtered');

  // click event on the submit button
  submit.on('click', function() {
    // collect the input value
    const filterVal = input.val();
    // use filter to return the numbers in the array that are greater than the input value
    const filterArray = array3.filter(element => element < filterVal);
    // display the numbers to the user
    lessThan.text(filterArray);
    // reset the input box to nothing
    input.val('');
  });

  // set up a new array and a new variable for the span element
  const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        reduceVal = $('.added');

  // click event on the submit button
  submit.on('click', function() {
    // collect the input value
    const sumVal = input.val();
    // parse the input into a number
    const num = parseInt(sumVal);

    // make sure user gave a real number
    if(!isNaN(num)) {
      // add the number to the array
      array4.push(num);
      // use reduce to add all the numbers in the array into one number
      const totalSum = array4.reduce((acc, element) => acc + element);
      // display the number to the user
      reduceVal.text(totalSum);
      // reset the input box to nothing
      input.val('');
    }
  });
});
