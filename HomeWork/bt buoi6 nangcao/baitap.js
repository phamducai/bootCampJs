function ex1() {
  var n = document.getElementById("number").value;

  var arr = [];
  for (var i = 2; i <= n; i++) {
    var isPrime = true;
    for (var k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
      document.getElementById("result").innerHTML = arr;
      console.log(arr);
    }
  }
}
