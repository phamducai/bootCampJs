// function sum() {
//   var nums = [-5, 1, 2, 3, 4, 8, 15, 2, 8];
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (obj[10 - num] !== undefined) {
//       console.log(nums[obj[10 - num]], nums[i]);
//     }
//     obj[num] = i;
//   }
// }
// sum();

function ex2() {
  var arr = [1, 2, 3, 2, 2];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber in obj) continue;
    obj[currentNumber] = true;
  }

  var arrresult = Object.keys(obj);
  for (var i = 0; i < arrresult.length; i++) {
    arrresult[i] = +arrresult[i];
  }
  console.log(arrresult);
}
ex2();
