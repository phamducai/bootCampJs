function welcome() {
  var userName = document.getElementById("txtName").value;
  alert(`haha ${userName}`);
}
function setName() {
  document.getElementById("txtName").value = "Yasuo";
}
function setImage() {
  document.getElementById("img").src = "https://picsum.photos/200/300";
}
function ChangeBox() {
  // document.getElementById("box").style.backgroundColor = "green";
  // document.getElementById("box").style.width = "200px";
  // document.getElementById("box").style.height = "500px";
  // document.getElementById("box").classList.add("box2");
  // document.getElementById("box").classList.remove("box2");
  document.getElementById("box").classList.toggle("box2");
  // document.getElementById("box").classList.contains("box2");
  // checktrue
}
