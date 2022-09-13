function payMent() {
  var totalMoney = +document.getElementById("totalMoney").value;
  var tipMoney = +document.getElementById("selection").value;
  var people = +document.getElementById("people").value;
  var tipPeople = (totalMoney * tipMoney) / 100 / people;

  document.getElementById("tinhtienchoabe").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tipPeople;
}
// scope
// lexical scope:Lexical scope là nơi mà một biểu thức được tạo ra.
var a = 1;

var b = 2;
function sum() {
  var a = 10;
  var b = 20;
  function sum3() {
    console.log(a, b);
  }
  sum3();
  sum2();
}
function sum2() {
  console.log(a, b);
}
