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

  document.getElementById("btnReset").click();
  // gui request xuong backend kemf theo cai doi tuong sinh vien moi
  // request header +body(data)
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students",
    method: "POST",
    data: newStudent,
  })
    .then(function (res) {
      console.log(res);
      getStudentList();
    })
    .catch(function (err) {
      console.log(err);
    });
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

async function deleteStudent(studentId) {
  try {
    await axios({
      url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students/${studentId}`,
      method: "DELETE",
    });
    console.log(res);
    getStudentList();
  } catch (error) {
    console.log(err);
  }
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
  var promise = axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students",
    method: "GET",
  });
  promise
    .then(function (response) {
      studentList = mapData(response.data);
      console.log(studentList);
      renderStudents();
    })
    .catch(function (err) {
      console.log(err);
    });
  // **promise:-pending;-fulfill,-reject
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
  axios({
    url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students/${studentId}`,
    method: "GET",
  })
    .then(function (res) {
      var student = res.data;
      console.log(res);
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
    })
    .catch(function (err) {
      console.log(err);
    });
}
// update phan 2: cho nguoi dung sua thong tin tren form
function updateStudent() {
  studentId = document.getElementById("txtMaSV").value;
  fullName = document.getElementById("txtTenSV").value;
  email = document.getElementById("txtEmail").value;
  dob = document.getElementById("txtNgaySinh").value;
  course = document.getElementById("khSV").value;
  math = +document.getElementById("txtDiemToan").value;
  chemistry = +document.getElementById("txtDiemHoa").value;
  physic = +document.getElementById("txtDiemLy").value;
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
  axios({
    url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students/${studentId}`,
    method: "PUT",
    data: newStudent,
  })
    .then(function (res) {
      console.log(res);
      getStudentList();
    })
    .catch(function (err) {
      console.log(err);
    });
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
//asynchronous: bat dong bonew
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     var data = [{ name: "haha" }, { name: "huhu" }];
//     resolve(data);
//   }, 4000);
// });
// // dungf de kiemtra chay het chua
// var p3 = Promise.all(p1, p2);
// // promise chaining
// axios().then().catch(); //lay user profile
// // callback hell
// // promise chaining
// axios()
//   .then(function (res) {
//     var id = res.id;
//     return axios();
//   })
//   .then(function (res) {
//     var id = res.id;
//     return axios();
//   })
//   .catch(function (err) {
//     console.log();
//   });
// promise la gi
// promise.all
// promisschaining
// async await
// chay song song dung then catch
// chay tuan tu
