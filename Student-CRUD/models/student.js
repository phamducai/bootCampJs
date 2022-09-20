// 1 lop doi tuong la 1 file
function Student(id, name, dob, email, course, math, physic, chemistry) {
  this.studentId = id;
  this.fullName = name;
  this.email = email;
  this.dob = dob;
  this.course = course;
  this.math = math;
  this.physic = physic;
  this.chemistry = chemistry;
  this.calcGPA = function () {
    return (this.math + this.physic + this.chemistry) / 3;
  };
}
