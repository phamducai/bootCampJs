/*  
*Input :loai xe,quang duong,thoi gian cho
modal 
1.lay input
process:
output:tong tien
convert string to number
C1lay no *1 and
C2parseFloat,parseInt
C1+
// events click ,input,mouseout,mouseover,key up,key down,keyprees
truthy/falsy
falsy:0 null undefine,NaN,false,''
*/

function countTaxiFee() {
  var km = parseFloat(document.getElementById("txtKm").value);

  var waitingTime = parseFloat(document.getElementById("txtWaitingTime").value);
  var priceByTime;
  var grabCar = document.getElementById("grabCar");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var totalMoney;
  var p1;
  var p2;
  var p3;
  var p4;
  if (grabCar.checked) {
    grabType = "grabCar";
    p1 = 8000;
    p2 = 7500;
    p3 = 7000;
    p4 = 2000;
  } else if (grabSUV.checked) {
    grabType = "grabSUV";
    p1 = 9000;
    p2 = 8500;
    p3 = 8000;
    p4 = 3000;
  } else if (grabBlack.checked) {
    grabType = "grabBlack";
    p1 = 10000;
    p2 = 9500;
    p3 = 9000;
    p4 = 3500;
  } else {
    alert("vi long nhap loai xe");
    return;
  }
  priceByTime = Math.floor(waitingTime / 3) * p4;
  console.log(km, waitingTime, grabType);
  if (km < 1) {
    totalMoney = p1;
  } else if (km < 19) {
    totalMoney = p1 + p2 * (km - 1);
  } else {
    totalMoney = p1 + 18 * p2 + p3 * (km - 19);
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = totalMoney + priceByTime;
  console.log(totalMoney + priceByTime);
}
