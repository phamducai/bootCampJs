var staffList = [];
// function Create
function createStaff() {
  var value = validation();
  if (!value) return;
  else {
    // 1.lay input
    var account = document.getElementById("tknv").value;
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    var date = document.getElementById("datepicker").value;
    var payMent = document.getElementById("luongCB").value;
    var position = document.getElementById("chucvu").value;
    var hour = +document.getElementById("gioLam").value;
    // 2.kiem tra thong tin input
    for (var i = 0; i < staffList.length; i++) {
      if (account === staffList[i].account) {
        alert("tai khoan khong hop le !!!");
        return;
      }
    }
    var newStaff = new Staff(
      account,
      fullName,
      email,
      passWord,
      date,
      payMent,
      position,
      hour
    );
    // 3.them vao mang
    staffList.push(newStaff);
    // 4.rendermanhinh
    renderStaff(staffList);
    // 5.luu ds nhan vien vao localStorage
    saveStaffList();
    document.getElementById("btnThemNV").setAttribute("data-dismiss", "modal");
  }
}
// validateForm
function validation() {
  var isValid = true;
  var account = document.getElementById("tknv").value;
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var date = document.getElementById("datepicker").value;
  var payMent = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var hour = document.getElementById("gioLam").value;
  var accountPattern = /^([0-9]){4,6}$/g;
  var fullNamePattern =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
  var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var passWordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g;
  var datePattern =
    /^(?:(?:(?:0[1-9]|1[0-2]|[1-9])\/(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])\/(?:29|30)|(?:0[13578]|1[02])\/31)\/[1-9]\d{3}|02\/29(?:\/[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00))$/g;

  var paymentPattern =
    /^(100000[0-9]|10000[1-9][0-9]|1000[1-9][0-9]{2}|100[1-9][0-9]{3}|10[1-9][0-9]{4}|1[1-9][0-9]{5}|[2-9][0-9]{6}|1[0-9]{7}|20000000)$/g;
  var hourPattern = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/g;

  isValid &=
    required(account, "tbTKNV", "Tài khoản") &&
    checkPattern(account, "tbTKNV", accountPattern, "Tài khoản");

  isValid &=
    required(fullName, "tbTen", "Họ và tên") &&
    checkPattern(fullName, "tbTen", fullNamePattern, "Họ và tên");
  isValid &=
    required(email, "tbEmail", "email") &&
    checkPattern(email, "tbEmail", emailPattern, "email");
  isValid &=
    required(passWord, "tbMatKhau", "mật khẩu") &&
    checkPattern(passWord, "tbMatKhau", passWordPattern, "mật khẩu");
  isValid &=
    required(date, "tbNgay", "ngày tháng năm") &&
    checkPattern(date, "tbNgay", datePattern, "ngày tháng năm");
  isValid &=
    required(payMent, "tbLuongCB", "Lương") &&
    checkPattern(payMent, "tbLuongCB", paymentPattern, "Lương");
  isValid &= required(position, "tbChucVu", "Chức vụ");
  isValid &=
    required(hour, "tbGiolam", "giờ làm") &&
    checkPattern(hour, "tbGiolam", hourPattern, "giờ làm");
  return isValid;
}
// delete staff
function deleteStaff(account) {
  var ID = findbyID(account);
  if (ID === -1) {
    alert("ma sinh vien khong tai");
    return;
  }
  staffList.splice(ID, 1);
  renderStaff(staffList);
  saveStaffList();
  document.getElementById("btnThemNV").style.display = "inline-block";
  document.getElementById("btnCapNhat").style.display = "inline-block";
}

// ======================================
// 4.render a man hinh
function renderStaff(data) {
  var result = "";
  for (var i = 0; i < data.length; i++) {
    result += `<tr>
    <td>${data[i].account}</td>
    <td>${data[i].fullName}</td>
    <td>${data[i].email}</td>
    <td>${data[i].date}</td>
    <td>${data[i].position}</td>
    <td>${data[i].totalpayment()}</td>
    <td>${data[i].employeeType()}</td>
 
    <td ><button class="btn btn-danger mb-2" onclick="deleteStaff('${
      data[i].account
    }')">Delete</button>
    <button class="btn btn-info"  data-toggle="modal"
    data-target="#myModal" onclick="getUpdateStaff('${
      data[i].account
    }')">Update</button>
    
    </td>
    
  </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = result;
}
// ======================================
// 5.luu vao database
function saveStaffList() {
  // chuyen tu object sang chuoi json
  var staffListJSon = JSON.stringify(staffList);
  // luu vao localStorage
  localStorage.setItem("Staff", staffListJSon);
}
// Get data tu localStorage
(function getStaffList() {
  // get data tu localStorage
  var staffListJson = localStorage.getItem("Staff");
  if (!staffListJson) return;
  // chuyen tu string sang object
  staffList = mapData(JSON.parse(staffListJson));
  renderStaff(staffList);
})();
//  function giai nen mapdata
function mapData(staffListJson) {
  var result = [];
  for (var i = 0; i < staffListJson.length; i++) {
    var oldStaff = staffListJson[i];
    var newStaff = new Staff(
      oldStaff.account,
      oldStaff.fullName,
      oldStaff.email,
      oldStaff.passWord,
      oldStaff.date,
      oldStaff.payMent,
      oldStaff.position,
      oldStaff.hour
    );
    result.push(newStaff);
  }
  return result;
}
//  findbyID
function findbyID(account) {
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].account === account) {
      return i;
    }
  }
  return -1;
}
//search
function searchStaff() {
  var keyWord = document
    .getElementById("searchName")
    .value.toLowerCase()
    .trim();

  var renderSearch = [];
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].employeeType().toLowerCase().includes(keyWord)) {
      renderSearch.push(staffList[i]);
    }
  }
  renderStaff(renderSearch);
}
function buttonAdd() {
  document.getElementById("btnCapNhat").style.display = "none";

  document.getElementById("tbTKNV").style.display = "none";
  document.getElementById("tbTen").style.display = "none";
  document.getElementById("tbEmail").style.display = "none";
  document.getElementById("tbMatKhau").style.display = "none";
  document.getElementById("tbNgay").style.display = "none";
  document.getElementById("tbLuongCB").style.display = "none";
  document.getElementById("tbChucVu").style.display = "none";
  document.getElementById("tbGiolam").style.display = "none";

  document.getElementById("btnReset").click();
  document.getElementById("btnThemNV").style.display = "inline-block";
  document.getElementById("tknv").disabled = false;
}
function buttonClose() {
  document.getElementById("btnThemNV").style.display = "inline-block";
  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("tknv").disabled = false;
  // reset form
  document.getElementById("btnReset").click();
}
// get update
function getUpdateStaff(staffId) {
  document.getElementById("tbTen").style.display = "none";
  document.getElementById("tbEmail").style.display = "none";
  document.getElementById("tbMatKhau").style.display = "none";
  document.getElementById("tbNgay").style.display = "none";
  document.getElementById("tbLuongCB").style.display = "none";
  document.getElementById("tbChucVu").style.display = "none";
  document.getElementById("tbGiolam").style.display = "none";
  var index = findbyID(staffId);
  if (index === -1) return alert("ID khong ton tai");
  var staffCurrent = staffList[index];
  document.getElementById("tknv").value = staffCurrent.account;
  document.getElementById("name").value = staffCurrent.fullName;
  document.getElementById("email").value = staffCurrent.email;
  document.getElementById("password").value = staffCurrent.passWord;
  document.getElementById("datepicker").value = staffCurrent.date;
  document.getElementById("luongCB").value = staffCurrent.payMent;
  document.getElementById("chucvu").value = staffCurrent.position;
  document.getElementById("gioLam").value = staffCurrent.hour;
  // hien nut luu thay diu,an nut them
  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "inline-block";

  // disable input ma sinh vien
  document.getElementById("tknv").disabled = true;
}
//  update
function updateStaff() {
  var staffId = document.getElementById("tknv").value;
  var index = findbyID(staffId);
  var tempName = staffList[index].fullName;
  var tempEmail = staffList[index].email;
  var tempPassword = staffList[index].passWord;
  var tempDate = staffList[index].date;
  var tempPayment = staffList[index].payMent;
  var tempPosion = staffList[index].position;
  var tempHour = staffList[index].hour;

  staffList[index].fullName = document.getElementById("name").value;
  staffList[index].email = document.getElementById("email").value;
  staffList[index].passWord = document.getElementById("password").value;
  staffList[index].date = document.getElementById("datepicker").value;
  staffList[index].payMent = document.getElementById("luongCB").value;
  staffList[index].position = document.getElementById("chucvu").value;
  staffList[index].hour = document.getElementById("gioLam").value;

  var value = validation();
  if (!value) {
    staffList[index].fullName = tempName;
    staffList[index].email = tempEmail;
    staffList[index].passWord = tempPassword;
    staffList[index].date = tempDate;
    staffList[index].payMent = tempPayment;
    staffList[index].position = tempPosion;
    staffList[index].hour = tempHour;

    return;
  } else {
    document.getElementById("btnThemNV").style.display = "inline-block";

    document.getElementById("tknv").disabled = false;
    // reset form
    document.getElementById("btnReset").click();
    // 4.rendermanhinh

    renderStaff(staffList);
    // 5.luu ds nhan vien vao localStorage
    saveStaffList();
    document.getElementById("btnCapNhat").setAttribute("data-dismiss", "modal");
  }
}
// validation form
function required(val, spanId, nameinPut) {
  if (val.length === 0) {
    document.getElementById(spanId).innerHTML = `*Vui lòng nhập ${nameinPut}`;
    document.getElementById(spanId).style.display = "inline-block";

    return false;
  }
  document.getElementById(spanId).innerHTML = "";
  document.getElementById(spanId).style.display = "none";
  return true;
}
// pattern
function checkPattern(val, spanId, pattern, nameinPut) {
  if (pattern.test(val)) {
    document.getElementById(spanId).innerHTML = "";
    document.getElementById(spanId).style.display = "none";
    return true;
  }
  document.getElementById(spanId).innerHTML = `*${nameinPut} không hợp lệ`;
  document.getElementById(spanId).style.display = "inline-block";
  return false;
}
