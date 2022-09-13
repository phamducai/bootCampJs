function changeTab(e) {
  var btnAction = document.getElementById("btnAction");
  var btnFiction = document.getElementById("btnFiction");
  var btnRomantic = document.getElementById("btnRomantic");
  var btnHorror = document.getElementById("btnHorror");
  btnAction.classList.remove("active");
  btnFiction.classList.remove("active");
  btnRomantic.classList.remove("active");
  btnHorror.classList.remove("active");
  e.target.classList.add("active");
  console.log(e.target.getAttribute("data-tab"));
  // go ra show
  var tabAction = document.getElementById("tabAction");
  var tabFiction = document.getElementById("tabFiction");
  var tabRomantic = document.getElementById("tabRomantic");
  var tabHorror = document.getElementById("tabHorror");
  tabAction.classList.remove("show");
  tabFiction.classList.remove("show");
  tabRomantic.classList.remove("show");
  tabHorror.classList.remove("show");
  document
    .getElementById(e.target.getAttribute("data-tab"))
    .classList.add("show");
}
