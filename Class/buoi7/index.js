// // cau truc du lieu:array,Linklist,graph

// var names = ["hieu", "dung", "tai", "nguyen"];
// var scores = [1, 4, 6, 22, 4, 6, 8, 9];
// // names.push("hoang");
// // names.unshift("khai");
// // names.pop();
// // names.shift();
// var subject = ["Math", "Physical", "Chemistry", "Geography"];
// // ham xoa phan tu bat ky

// subject.splice(0, 1, "biology");
// var haha = subject.slice(0, 3);
// console.log(haha);
// var a = ["a", "b"];
// var b = ["b", "c"];
// var c = a.concat(b);
// console.log(c);
// for (let i of a) {
//   console.log(i);
// }

// function ex1() {
//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }
// ex1();
// function ex2() {
//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//       sum = sum + array[i];
//     }
//   }
//   console.log(sum);
// }

// function ex3() {
//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var temporary = -1;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       temporary = i;
//     }
//   }
//   console.log(temporary);
// }
// ex2();
// ex3();
// function ex4() {
//   var array = [1, 2, 3, 4, 5, 6, 7, 9, 8];
//   var numberone = array[0];
//   var numbertwo = array[1];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > numberone) {
//       numbertwo = numberone;
//       numberone = array[i];
//     } else if (numbertwo < array[i] && array[i] < numberone) {
//       numbertwo = array[i];
//     }
//   }
//   console.log(numberone);
//   console.log(numbertwo);
// }
// ex4();

// function ex5() {
//   var array = [1, 2, 3, 4, 5, 6, 7, 9, 8];
//   var numberone = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (numberone > array[i]) {
//       numberone = array[i];
//     }
//   }
//   console.log(numberone);
// }
// ex5();
// function ex6() {
//   var arr = ["A", "B", "C", "D"];
//   var item = "E";
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return true;
//     }
//     return false;
//   }
// }

// function ex7() {
//   var arr = ["hieu", "tai", "dung", "hieu", "tai"];
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     var isExist = false;
//     for (var k = 0; k < result.length; k++) {
//       if (result[k] === arr[i]) {
//         isExist = true;
//       }
//     }
//     if (!isExist) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
// ex7();
// big 0 notion:do phuc tap(operation,space)

// function ex8() {
//   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (var i = 1; i < arr.length; i++) {
//     for (var k = i + 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] === 10) {
//         console.log("co");
//         return;
//       }
//     }
//   }
//   console.log("koco");
// }
// ex8();
// function ex8() {
//   var arr = [-2, 0, 5, 6, 7, 9];
//   var i = 0;
//   var k = arr.length - 1;
// for(;i<k;){

// }

// }
// function ex9() {
//   var arr = [5, 8, 9, 60, 44, 2];
//   for (var k = arr.length - 1; k >= 0; k--) {
//     for (var i = 0; i < k; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }

function ex10() {
  var arr = [5, 8, 9, 60, 44, 2];
  for (var k = 0; k < arr.length; k++) {
    var isSwapped = false;
    for (var i = 0; i < arr.length - k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      console.log(arr);
      return;
    }
  }
  console.log(arr);
  console.log("hello");
}
ex10();
// declaration funtion
// function sum() {}
// express function
// var sum = function () {
//   console.log("hello");
// };
// hoisting khac nhau ve hosting :cho phep  dung 1 bien hoac function khi khoi tao
// callbackfunction:functionn B duoc truyen vao fuction A duoi dang tham so ban dau
function sum(a, b) {
  console.log(a + b);
}
function minus(a, b) {
  console.log(a - b);
}
function test(callback) {
  var x = 10;
  var y = 20;
  callback(x, y);
}
test(sum);
test(minus);
// closure:function A return function B
function test2() {
  var age = 15;
  return function haha() {
    console.log(age);
  };
}
test2()();
// curry function tach cac argument thanh nhieu function con
function sums(a) {
  return function (b) {
    console(a + b);
  };
}
sum(2)(4);
