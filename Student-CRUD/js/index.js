/**
 * Project: Student Management (CRUD)
 * Features:
 *  + Create student
 *  + Read students
 *  + Update student
 *  + Delete student
 *  + Search student (id + name)
 *  + Validate form
 * PRD + design
 * phân rã lớp đối tượng
 * Start Project
 * PM BA PO write produt requirements document PRD
 * design
 * phan ra doi tuong
 * UI=>implement
 * testing(qc)
 *production()
 codechuc nang
 *
 *
 */
var studentList = [];
function createStudent() {
  var value = validateForm();
  if (!value) return;

  // lay iput
  //check ma sinh vien
  //tao object sinh vien
  //push object vao mang
  //in danh sach sinh vien
  var studentId = document.getElementById("txtMaSV").value;
  var fullName = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var dob = document.getElementById("txtNgaySinh").value;
  var course = document.getElementById("khSV").value;
  var math = +document.getElementById("txtDiemToan").value;
  var physic = +document.getElementById("txtDiemLy").value;
  var chemistry = +document.getElementById("txtDiemHoa").value;
  for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].studentId === studentId) {
      alert("ma sinh vien khong hop le !!!");
      return;
    }
  }
  var newStudent = new Student(
    studentId,
    fullName,
    email,
    dob,
    course,
    math,
    physic,
    chemistry
  );
  studentList.push(newStudent);
  //5 hien thi ra man hinh

  renderStudents();
  // 6 luu ds sinh vien tai localStorage
  setStudentList();
  document.getElementById("btnReset").click();
}
function validateForm() {
  var studentId = document.getElementById("txtMaSV").value;
  var fullName = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var isValid = true;
  isValid &=
    required(studentId, "spanMaSV") && checkLength(studentId, "spanMaSV", 6, 9);
  isValid &=
    required(fullName, "spanTenSV") && checkString(fullName, "spanTenSV");
  isValid &= required(email, "spanEmailSV");
  return isValid;
}

function deleteStudent(studentId) {
  var index = findByID(studentId);
  if (index === -1) {
    alert("ma sinh vien khong tai");
    return;
  }
  studentList.splice(index, 1);
  renderStudents();
  setStudentList();
}
function renderStudents(data) {
  var HTML = "";
  if (!data) data = studentList;
  data.map((currentStudent) => {
    HTML += `<tr>
      <td>${currentStudent.studentId}</td>
      <td>${currentStudent.fullName}</td>
      <td>${currentStudent.email}</td>
      <td>${currentStudent.dob}</td>
      <td>${currentStudent.course}</td>
      <td>${currentStudent.calcGPA().toFixed(2)}</td>
      <td><button class="btn btn-danger" onclick="deleteStudent('${
        currentStudent.studentId
      }')">Delete</button></td>
      <td><button class="btn btn-info" onclick="getUpdateStudent('${
        currentStudent.studentId
      }')">Update</button></td>
    </tr>`;
  });
  document.getElementById("tbodySinhVien").innerHTML = HTML;
}
function findByID(studentId) {
  for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].studentId === studentId) {
      return i;
    }
  }
  return -1;
}
function setStudentList() {
  var studentListJSon = JSON.stringify(studentList);
  localStorage.setItem("SL", studentListJSon);
}
function getStudentList() {
  var studentListJSON = localStorage.getItem("SL");
  console.log(studentListJSON);
  if (!studentListJSON) return;
  // cleancode
  // parse:giai nen;
  // stringify:nen
  studentList = mapData(JSON.parse(studentListJSON));
  renderStudents();
}
// window onload
window.onload = function () {
  console.log("window load");
  getStudentList();
};
// input:list local=>output:list moi
function mapData(studentListLocal) {
  var result = [];
  for (var i = 0; i < studentListLocal.length; i++) {
    var oldStudent = studentListLocal[i];
    var newStudent = new Student(
      oldStudent.studentId,
      oldStudent.fullName,
      oldStudent.dob,
      oldStudent.email,
      oldStudent.course,
      oldStudent.math,
      oldStudent.physic,
      oldStudent.chemistry
    );
    result.push(newStudent);
  }
  return result;
}
// ghi chu: cac phuong thuong sau khi chuyen doi qua string thi se con thuoc tinh va ko con phuong thuc
// search Students
function searchStudent() {
  keyWord = document.querySelector("#txtSearch").value.toLowerCase().trim();
  var result = [];
  for (var i = 0; i < studentList.length; i++) {
    if (
      studentList[i].studentId.includes(keyWord) ||
      studentList[i].fullName.toLowerCase().includes(keyWord)
    ) {
      result.push(studentList[i]);
    }
  }
  renderStudents(result);
  // document.getElementsByClassName
  // return mang
}

// update phan 1: lay thong tin sinh vien show len tren form
function getUpdateStudent(studentId) {
  var index = findByID(studentId);
  if (index === -1) return alert("ID khong ton tai");
  var student = studentList[index];
  document.getElementById("txtMaSV").value = student.studentId;
  document.getElementById("txtTenSV").value = student.fullName;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtNgaySinh").value = student.dob;
  document.getElementById("khSV").value = student.course;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physic;
  document.getElementById("txtDiemHoa").value = student.chemistry;
  // hien nut luu thay diu,an nut them
  document.getElementById("btnCreate").style.display = "none";
  document.getElementById("btnReset").style.display = "none";
  document.getElementById("btnUpdate").style.display = "inline-block";
  // disable input ma sinh vien
  document.getElementById("txtMaSV").disabled = true;
}
// update phan 2: cho nguoi dung sua thong tin tren form
function updateStudent() {
  var studentId = document.getElementById("txtMaSV").value;
  var index = findByID(studentId);
  var student = studentList[index];
  student.fullName = document.getElementById("txtTenSV").value;
  student.email = document.getElementById("txtEmail").value;
  student.dob = document.getElementById("txtNgaySinh").value;
  student.course = document.getElementById("khSV").value;
  student.math = +document.getElementById("txtDiemToan").value;
  student.physic = +document.getElementById("txtDiemLy").value;
  student.chemistry = +document.getElementById("txtDiemHoa").value;
  renderStudents();
  setStudentList();

  document.getElementById("btnCreate").style.display = "inline-block";
  document.getElementById("btnReset").style.display = "inline-block";
  document.getElementById("btnUpdate").style.display = "none";
  document.getElementById("txtMaSV").disabled = false;
  // clear toan bo input
  document.getElementById("btnReset").click();
}

// kieu du lieu co ban
// string,number,undefined,null,boolean
// reference type:object
// var student2 = Object.assign({}, student1);
// student2.name = "hoang";
// var student2 = JSON.parse(JSON.stringify(student1));

// validation form
function required(val, spanId) {
  if (val.length === 0) {
    document.getElementById(spanId).innerHTML = "* Truong nay bat buoc nhap";
    return false;
  }
  document.getElementById(spanId).innerHTML = "";
  return true;
}
function checkLength(val, spanId, min, max) {
  if (!min) min = 6;
  if (!max) max = 9;
  if (val.length < min || val.length > max) {
    document.getElementById(
      spanId
    ).innerHTML = `* Mat khau phai tu ${min} den ${max}`;
    return false;
  }
  document.getElementById(spanId).innerHTML = "";
  return true;
}
//  pattern check name
function checkString(val, spanId) {
  var pattern =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
  if (pattern.test(val)) {
    document.getElementById(spanId).innerHTML = "";
    return true;
  }
  document.getElementById(spanId).innerHTML = "nhap sai dinh dang";
  return false;
}
