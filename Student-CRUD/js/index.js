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
}
function deleteStudent(studentId) {
  var index = findByID(studentId);
  if (index === -1) {
    alert("ma sinh vien on tai");
    return;
  }
  studentList.splice(index, 1);
  renderStudents();
  setStudentList();
}
function renderStudents() {
  var HTML = "";
  studentList.map((currentStudent) => {
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
  if (!studentListJSON) return;
  // cleancode
  // parse:giai nen;
  // stringify:nen
  studentList = mapData(JSON.parse(studentListJSON));
  renderStudents();
}
getStudentList();
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
