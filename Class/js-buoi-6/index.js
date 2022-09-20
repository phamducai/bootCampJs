// while
// biến khởi tạo
// var i = 0;

//điều kiện lặp

// while (i < 0) {
//   console.log("Hello");
//   console.log("world");
//   // bước nhảy
//   i += 2;
// }

// do while
// var i = 0;

// do {
//   console.log("hello world");
//   i++;
// } while (i < 0);

// for
// for (var k = 0; k < 20; k++) {
//   if (k === 10) {
//     continue;
//   }

//   console.log("Hello world");
//   if (k === 13) {
//     break;
//   }
// }

// var i = 0;

// while (i < 100) {
//   if (i % 2 === 0) {
//     console.log(i, " là sỗ chẵn");
//   } else {
//     console.log(i, " là số lẻ");
//   }
//   i++;
// }

// for(var i = 0 ; i< 100; i++){
//     if (i % 2 === 0) {
//         console.log(i, " là sỗ chẵn");
//       } else {
//         console.log(i, " là số lẻ");
//       }
// }

function ex2() {
  var n = 100;
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

ex2();

function ex3() {
  // 1 + 2 + 3 + 4 +5 > 10
  // n = 5

  var sum = 0;
  var n;

  // n = 1
  // sum = 1

  // n = 2;
  // sum = 3

  // n = 3
  // sum =6

  // n = 4
  // sum= 10

  // n = 5;
  // sum= 15

  for (var i = 1; sum <= 10; i++) {
    n = i;
    sum += i;
  }

  console.log(n);
}

ex3();

//2.5.
//cho một số n, kiểm tra n có phải là số nguyên tố hay ko
// (snt là số chỉ chia hết cho 1 và chính nó)
// vd: 2,3,5,7,11,13,17..

// vd: 2,3,4,5,6   7
// vd  2,3,4,5     6

function ex4() {
  var n = 6;
  var isPrime = true;

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("snt");
  } else {
    console.log("ko phai snt");
  }
}
ex4();

function ex5() {
  var n = 5;
  var res = "";

  for (var k = 0; k < n; k++) {
    // k =0;
    // k =1
    //k =3
    for (var i = 0; i < n; i++) {
      //i =0
      //i =1
      // i=2
      //i =3
      // i =4
      // i =5
      res += "* ";
    }
    res += "\n";
  }
  console.log(res);
}
ex5();

function ex6() {
  var w = 5;
  var h = 10;
  var res = "";

  for (var k = 0; k < h; k++) {
    for (var i = 0; i < w; i++) {
      res += "* ";
    }
    res += "\n";
  }
  console.log(res);
}
ex6();

function ex7() {
  var n = 5;
  var res = "";

  for (var k = 0; k < n; k++) {
    for (var i = 0; i <= k; i++) {
      res += "* ";
    }
    res += "\n";
  }
  console.log(res);
}
ex7();

function ex8() {
  var n = 5;
  var w = 2 * n - 1;
  var res = "";

  for (var k = 0; k < n; k++) {
    // k = 0
    // k =1
    // k =2
    // k = 3
    // k = 4
    for (var i = 1; i <= w; i++) {
      //   [5,5]
      //   [4,6]
      //   [3,7]
      //   [2, 8]
      //   [1,9]

      if (i >= n - k && i <= n + k) {
        res += "* ";
      } else {
        res += "  ";
      }
    }

    res += "\n";
  }
  console.log(res);
}
ex8();

// ex6: vẽ hình chữ nhật w * h

// ex7: vẽ tam giác vuông cân với số cạnh n =5
/**
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 *
 */

// ex8: vẽ tam giác cân không vuông n = 5

/**
 *           *
 *         * * *
 *       * * * * *
 *     * * * * * * *
 *   * * * * * * * * *
 *
 */
