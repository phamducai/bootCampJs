// homework  TÍNH TIỀN CÁP

function charge() {
  var customerType = document.getElementById("personalCustomer").value;
  var customerID = +document.getElementById("customerID").value;
  var connectionNumber = +document.getElementById("numberConnection").value;
  var channelNumber = +document.getElementById("numberChannel").value;
  switch (customerType) {
    case "Doanh Nghiệp":
      if (connectionNumber <= 10) {
        var cableCharge = 75 + 15 + 50 * channelNumber;
      } else {
        var cableCharge =
          75 + 15 + 50 * channelNumber + 5 * (connectionNumber - 10);
      }
      break;
    case "Cá Nhân":
      {
        connectionNumber = 0;
        var cableCharge = 4.5 + 20.5 + 7.5 * channelNumber;
      }
      break;
    default:
      var cableCharge = "ban nhap sai loai khach hang";
  }

  document.getElementById(
    "xuatTien"
  ).innerHTML = `Khách hàng ${customerID} phải trả ${cableCharge} VND`;
}
function check() {
  var checkeds = document.getElementById("personalCustomer").checked;
  if (checkeds) {
    document.getElementById("numberConnection").disabled = true;
  } else {
    document.getElementById("numberConnection").disabled = false;
  }
}
