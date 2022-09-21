var arr = [];
var arrayNumberReal = [];
function addNumber() {
  var number = +document.getElementById("inputNumber").value;
  document.getElementById("inputNumber").value = null;
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
    document.getElementById("textMinNumber").style.display = "none";
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
  document.getElementById("minPositiveNumber").innerHTML = minNumer;
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
// homework6
function changePlaces() {
  var numberOne = document.getElementById("numberChangeOne").value;
  var numberTwo = document.getElementById("numberChangeTwo").value;
  var temp;
  // check gia tri hop le
  if (
    arr.length < numberOne ||
    arr.length < numberTwo ||
    numberOne < 0 ||
    numberTwo < 0
  ) {
    document.getElementById("textNumber").style.display = "none";
    document.getElementById("Numchange").innerHTML =
      "Vị trí trong mảng không hợp lệ";
  } else {
    temp = arr[numberOne];
    arr[numberOne] = arr[numberTwo];
    arr[numberTwo] = temp;
    document.getElementById("Numchange").innerHTML = arr;
  }
}
// homeWork7
function bubbleSort() {
  for (var i = 0; i < arr.length; i++) {
    var flag = false;
    for (var k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
  document.getElementById("sort").innerHTML = arr;
}

// homeWork 8
function primeNumber() {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var isPrime = true;
    for (var k = 2; k <= Math.sqrt(arr[i]); k++) {
      if (arr[i] % k === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      document.getElementById("firstPrime").innerHTML = arr[i];
      break;
    } else {
      document.getElementById("firstPrime").innerHTML = -1;
    }
  }
}
// homework9
function addNum() {
  var number = +document.getElementById("arrayReal").value;
  document.getElementById("arrayReal").value = null;
  arrayNumberReal.push(number);
  document.getElementById("resultArray").innerHTML = arrayNumberReal;
}
function countInteger() {
  var count = 0;
  for (var i = 0; i < arrayNumberReal.length; i++) {
    if (Number.isInteger(arrayNumberReal[i])) {
      count++;
    }
  }
  document.getElementById("countNumberInteger").innerHTML = count;
}
// homeWork10
function compare() {
  var countNegativeNumber = 0;
  var countPositiveNumber = 0;
  var text;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositiveNumber++;
    } else {
      countNegativeNumber++;
    }
  }
  if (countPositiveNumber > countNegativeNumber) {
    text = "Số dương > Số âm";
  } else if (countPositiveNumber < countNegativeNumber) {
    text = "Số dương < Số âm";
  } else {
    text = "Số dương = Số âm";
  }
  document.getElementById("compareNumber").innerHTML = text;
}
