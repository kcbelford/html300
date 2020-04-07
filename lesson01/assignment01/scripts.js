$(document).ready(function() {

  const array1 = [3, 11, 33, 36],
        input = $('.input'),
        submit = $('.submit'),
        includesVal = $('.included');
// includes method
  submit.on('click', function() {
    const val = input.val();
    const found = array1.includes(element => element === val);
    includesVal.text(found);
    input.val('');
  });

  const array2 = [2, 4, 6, 8],
        mulVal = $('.multiplied');
// map method
  submit.on('click', function() {
    const multiply = input.val();
    const mapArray = array2.map(element => element * multiply);
    mulVal.text(mapArray);
    input.val('');
  });

  const array3 = [1, 7, 9, 13, 23, 55, 67, 89, 101, 200],
        lessThan = $('.filtered');
// filter method
  submit.on('click', function() {
    const filterVal = input.val();
    const filterArray = array3.filter(element => element < filterVal);
    lessThan.text(filterArray);
    input.val('');
  });

  const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        reduceVal = $('.added');
// reduce method
  submit.on('click', function() {
    const sumVal = input.val();
    const num = parseInt(sumVal);

    if(!isNaN(num)) {
      array4.push(num);
      const totalSum = array4.reduce((acc, element) => acc + element);
      reduceVal.text(totalSum);
      input.val('');
    }
  });
});
