// var pham vi su dung trong function scope
// var chi ho tro hoisting
// let va const khong ho tro hoisting
// let va cosnt chi dung trong pham vi block scope {}
// let dung de khai bao giong var
// const dung de khai boao hang so
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// expression function
// decalaration funtion
// arrow function chi return ve mot gia tri va khong lam gi them
//arrow function khong co tu khoa this
// const tinh toan ven du lieu
// const sum = (i) => {
//   i++;
//   console.log(i);
// };
// sum();
// sum();
// mot thang co this mot thang kho this
// arrow funtion khong co this
// const student = {
//   name: "hieu",
//   age: 12,
//   father:{}.
//   showinfor: function () {
//     const test = () => {
//       console.log(this.age);
//     };
//     test();
//   },
// };
// student.showinfor();
// han che dung arrow function de lam method cho doi tuong
// default parameter
// gia tri mac dinh cua tham so
// spread operator:toan tu mo rong
// const student1 = {
//   name: "hieu",
//   age: 12,
// };
// student.name = "hoang";
// console.log(student1);
// const student2 = { ...student1 };
// toan tu mo rong dung cho object vs array tuong duong voi copy
// noi 2 Object laii voi nhau
// var obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// var aar1 = [2, 31, 22];
// var arr2 = [...arr1];
// // rest paramerter
// function calcSum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(a + b);
// }
// calcSum(1, 2, 6, 4, 7);
// no vua return vua parameter
// Destructuring
const car = {
  name: "KIA Sorento",
  color: 28,
  seat: 7,
};
const car2 = { name: "kia" };
const { name, color } = car;
// moc 2key
console.log(name);
const arr = ["hieu", "hung", "tai"];
const [x, y, z] = arr;
console.log(x, y, z);
// template String
// object literal :Object chan phuong
const fullName = "hieu";
const age = 12;
const obj1 = {
  fullName,
  age,
  phone: "0334643124",
  showName() {
    console.log(this.fullName);
  },
};
// for in lay index
var arra = ["hieu", "tai", "hung", "hanh"];

for (let i in arra) {
  console.log(arr[i]);
}
// for of lay item
for (let item of arra) {
  console.log(item);
}
