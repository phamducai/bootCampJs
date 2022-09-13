function ex4() {
  var n = 467;
  if (n === 2) {
    console.log(n, "la so nguyen to");
  } else {
    for (var i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        console.log(n, "ko la so nguyen to");
        return;
      }
    }
    console.log(n, " la so nguyen to");
  }
}
