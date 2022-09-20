// // cấu trúc dữ liệu : array , link list, tree ,graph...

// var names = ["hieu", "dung", "tai", "nguyen"];
// var scores = [1, 4, 6, 2, 4, 6, 8, 9];
// var subjects = ["Math", "Physics", "Chemistry", "Geography"];

// console.log(names[1], names[3]);

// // hàm them 1 phần tử vào cuối mảng
// // names.push("hoang");

// // hàm thêm 1 phần tử vào đầu mảng
// // names.unshift("Khai");

// // hàm xoá phần tử cuối mảng
// // names.pop();

// // hàm xoá phần tử đầu mảng
// // names.shift();

// // hàm xoá phần tử ở vị trí bất kì
// // subjects.splice(2, 1);

// // hàm thêm phần tử vào vị trí bất kì
// // subjects.splice(2, 0, "Biology");

// // cập nhật 1 phần tử trong mảng

// // names[0] = "Edward";
// // names.splice(0, 1, "Edward");

// var names1 = names.slice(0, 3);

// console.log(names1);

// var studentList1 = ["Hieu", "Dung"];
// var studentList2 = ["Hoang", "Tai"];

// var allStudents = studentList1.concat(studentList2);
// // ["Hieu", "Dung", "Hoang", "Tai"]

// for (var i = 0; i < allStudents.length; i++) {
//   console.log(allStudents[i]);
// }

// // ex1: cho 1 mảng số nguyên, kiểm tra xem số nào là số chẵn.
// function ex1() {
//   var arr = [1, 5, 3, 7, 8, 10];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i], "là số chẵn");
//     }
//   }
// }

// ex1();

// // ex2: cho 1 mảng số nguyên, tính tổng các số lẻ trong mảng.
// function ex2() {
//   // O(n)
//   var arr = [1, 5, 3, 7, 8, 10];
//   var sum = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       sum += arr[i];
//     }
//   }

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       sum += arr[i];
//     }
//   }

//   console.log(sum);
// }
// ex2();

// // ex3: cho 1 mảng số nguyên, tìm vị trí số chẵn cuối cùng trong mảng.
// //  trả về -1 nếu mảng ko có số chẵn
// function ex3() {
//   var arr = [1, 5, 3, 7, 8, 10];
//   var temp = -1;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       temp = i;
//     }
//   }

//   console.log(temp);
// }
// ex3();

// // ex4: cho 1 mảng số nguyên, tìm số lớn nhất và lớn nhì trong mảng
// function ex4() {
//   var arr = [1, 5, 3, 7, 8, 10, 10];
//   var max = arr[0];
//   var second = 0;

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       second = max;
//       max = arr[i];
//     } else if (arr[i] > second && arr[i] < max) {
//       second = arr[i];
//     }
//   }

//   console.log(max, second);
// }
// ex4();

// // ex5: cho 1 mảng số nguyên, tìm số nhỏ nhất trong mảng

// // ex6: cho 1 mảng ,kiểm tra một phần tử có nằm  trong mảng hay ko
// function ex6() {
//   var arr = ["A", "B", "C", "D"];
//   var item = "B";

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return true;
//     }
//   }

//   return false;
// }

// // ex7: cho 1 mảng tên, lọc ra các tên bị trùng.
// //      vd: ["hieu", "tai", "dung", "hieu", "tai"] => ["hieu", "tai", "dung"]

// function ex7() {
//   var arr = ["hieu", "tai", "dung", "hieu", "tai"];
//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     // i = 0 => arr[i] = "hieu"
//     // i = 1 => arr[i] = "tai"
//     // i = 2 => arr[i] = "dung"
//     var isExisted = false;

//     for (var k = 0; k < result.length; k++) {
//       if (result[k] === arr[i]) {
//         isExisted = true;
//       }
//     }

//     if (!isExisted) {
//       result.push(arr[i]);
//     }
//   }

//   console.log(result);
// }
// ex7();

// // ex8: cho 1 mảng số nguyên bất kì, kiểm tra xem có 2 số bất kì nào
// //      trong mảng có tổng là 10 hay ko?
// function ex8() {
//   // O(n^2)
//   var arr = [2, 5, 3, 7, 8, 10, 10];

//   for (var i = 0; i < arr.length; i++) {
//     // i = 0 => arr[i] = 1
//     // i = 1 => arr[i] = 5

//     for (var k = i + 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] === 10) {
//         console.log("có");
//         return;
//       }
//     }
//   }

//   console.log("không");
// }

// // ex9: cho 1 mảng số nguyên tăng dần, kiểm tra xem có 2 số bất kì nào
// //      trong mảng có tổng là 10 hay ko?

// function ex9() { // O(n)
//   var arr = [-2, 1, 3, 4, 5, 8];
// }

// ex9();

// // ex10: cho 1 mảng số nguyên, sắp xếp tăng dần
// //(interchange, insertion, selection, bubble sort, merge sort, quick sort, heap, radix)

// [1,2,3,4].reverse()

// // Big O notion: độ phức tạp của thuật toán (operation)

// function sum(a, b) {
//   //O(1)
//   var res = a + b;
//   console.log(res);
// }

// sum(1000000, 200000000);

function sum() {
  var nums = [-2, 12, 14, -4, 8, 2, -2];
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
    if (hashmap[10 - num] !== undefined) {
      console.log(nums[hashmap[10 - num]], nums[i]), 10 - num;
    }
    hashmap[num] = i;
  }
}
sum();
// function isValid() {
//   s = "[{()}]";
//   var arr = s.split("");

//   const stack = [];
//   const match = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };
//   for (var ch of s) {
//     if (ch === "(" || ch === "[" || ch === "{") {
//       stack.push(ch);
//       arr.pop(ch);
//       if (arr.length === 0) {
//         console.log("sai");
//         return false;
//       }
//     } else {
//       const top = stack.pop();
//       if (match[ch] !== top) {
//         console.log("sai");
//         return false;
//       }
//     }
//   }
//   console.log("dung");
//   return stack.length === 0;
// }
// isValid();
