// lớp đối tượng nhan vien
function Staff(
  account,
  fullName,
  email,
  passWord,
  date,
  payMent,
  position,
  hour
) {
  this.account = account;
  this.fullName = fullName;
  this.email = email;
  this.passWord = passWord;
  this.date = date;
  this.payMent = payMent;
  this.position = position;
  this.hour = hour;
  this.totalpayment = function () {
    var baseCoefficient;
    switch (this.position) {
      case "Sếp":
        var baseCoefficient = 3;
        break;
      case "Trưởng phòng":
        var baseCoefficient = 2;
        break;
      case "Nhân viên":
        var baseCoefficient = 1;
        break;

      default:
        break;
    }
    return this.payMent * baseCoefficient;
  };
  this.employeeType = function () {
    var classification = "";
    var hours = this.hour;
    if (hours >= 192) {
      classification = "nhân viên xuất sắc";
    } else if (hours >= 176) {
      classification = "nhân viên giỏi";
    } else if (hours >= 160) {
      classification = "nhân viên khá";
    } else {
      classification = "nhân viên trung bình";
    }
    return classification;
  };
}
