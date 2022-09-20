// // // Object
// // var student = {
// //   // key:value
// //   fullName: "yasuo",
// //   age: 18,
// //   // method =function hanh dong
// //   // property=thuoc tinh
// //   calcGPA: function () {
// //     return 10;
// //   },
// // };
// // student.classify = function () {
// //   return;
// // };
// // console.log(student.fullName);
// // console.log(student.calcGPA());
// // student.fullName = "haha";
// // var car = {
// //   name: "MGZS",
// //   price: 62800,
// // };
// // // dynamickey
// // var key = "price";

// // console.log(car[key]);
// // // lopdoituong
// // // scope:globake,function,lexical,dyanmic scope
// // // viet hoa chu cai dau de phan biet
// // // lexcical:noi tao ra funtion se quyet dinh bien dc phep xai
// // // ?????????????????this:tro toi doi tuong ma function do dang la phuong thuc quan trong
// // var obj = {
// //   name: "huhu",
// //   haha: function () {
// //     var seft = this;
// //     console.log(this);
// //     function test4() {
// //       console.log(seft.this, seft.age);
// //     }
// //     test4();
// //   },
// // };
// // execution context:vung thuc thi
// var c = 10;
// function demoLexical() {
//   console.log(c);
// }
// function test10() {
//   var c = 20;
//   demoLexical();
// }
// test10();
function Student() {
  this.fullName = "hieu";
  this.age = 12;
  this.class = "13vlh2";
  this.physical = 8;
}
var student3 = new Student();
var student4 = new Student();
console.log(student3, student4);
// lenh new tao ra  1 object rong sau goi goi student chay
