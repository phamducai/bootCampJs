const ages = [
  { id: 1, name: "haha1" },
  { id: 2, name: "haha2" },
  { id: 3, name: "haha3" },
  { id: 4, name: "haha4" },
];

function test(index) {
  return index.id === "haha1";
}
let age = ages.find(test);
console.log(age); // 28
