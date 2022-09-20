var arr = [];
function addNumber() {
  var number = +document.getElementById("inputNumber").value;
  arr.push(number);
  document.getElementById("array").innerHTML = arr;
}
// homeWork 1
function sum() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  document.getElementById("arrSum").innerHTML = sum;
}
// homework2
function countPostiveNumber() {
  var countNumer = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countNumer = countNumer + 1;
    }
  }
  document.getElementById("positiveNumber").innerHTML = countNumer;
}

// homework3
function minNumbers() {
  var minNumer = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (minNumer > arr[i]) {
      minNumer = arr[i];
    }
  }
  document.getElementById("minNumbers").innerHTML = minNumer;
}
// homework4
function minNumberPositive() {
  var arrPositive = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrPositive.push(arr[i]);
    }
  }
  if (arrPositive.length === 0) {
    document.getElementById("minPositiveNumber").innerHTML =
      "Không có số dương nào trong mảng";
    return;
  }
  var minNumer = arrPositive[0];
  for (var i = 1; i < arrPositive.length; i++) {
    if (minNumer > arr[i]) {
      minNumer = arr[i];
    }
  }
  document.getElementById(
    "minPositiveNumber"
  ).innerHTML = `Kết quả là : ${minNumer}`;
}
// homework5
function evenNumber() {
  var evenNumbers = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber = arr[i];
    }
  }
  document.getElementById("evenNum").innerHTML = evenNumber;
  return -1;
}
