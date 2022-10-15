// // const arr = [1, 2, 3, 4, 5];
// // const test = arr.filter((item) => {
// //   return item > 2;
// // });

// // bind,call,apply:dieu huong con tro this
// const student = {
//   name: "hieu",
//   age: 13,
//   showInfor() {
//     console.log(this.name, this.age);
//   },
//   showInfor2(mess, error) {
//     console.log(this.name, this.age, mess, error);
//   },
// };
// const student2 = {
//   name: "ai",
//   age: 15,
// };
// // bind =>return ve mot function moi,ma trong funtiocn do,this da tro to funtion 2

// // call =>run function khong co tham so ngay lap tuc,a trong do this da tro toi student2
// // apply giong call run function co tham so ngay lap tuc ,ma trong function do,this da tro toi student2ss
// student.showInfor2.apply(student2, ["hello", "error"]);

// optinal chaining
var obj = {
  address: {
    contry: "viet nam",
  },
};

// import export module
