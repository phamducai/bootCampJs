// homework quanly tuyen sinh
function MARK(sub1, sub2, sub3, type, ares) {
  switch (type) {
    case 1:
      typeGrade = 2.5;
      break;
    case 2:
      typeGrade = 1.5;
      break;
    case 3:
      typeGrade = 1;
      break;
    default:
      typeGrade = 0;
  }

  switch (ares) {
    case "A":
      typeGrade = 2;
      break;
    case "B":
      typeGrade = 1;
      break;
    case "C":
      typeGrade = 0.5;
      break;
    default:
      typeGrade = 0;
  }
  var sum = typeGrade + sub1 + sub2 + sub3 + typeGrade;
  if (sub1 === 0 || sub2 === 0 || sub3 === 0 || sum <= 22) {
    console.log("ban da truot dai hoc", sum);
  } else {
    console.log("ban da do dai hoc", sum);
  }
  return sum;
}

MARK(9, 9, 9, 2, "A");

// bai tap tinh tien dien
function electricityBill(power) {
  var fullName = "phamducai";
  if (power <= 50) {
    var totalMoney = power * 500;
  } else if (power <= 100) {
    var totalMoney = (power - 50) * 650 + 50 * 500;
  } else if (power <= 200) {
    var totalMoney = (power - 100) * 850 + 50 * 500 + 50 * 650;
  } else if (spower <= 350) {
    console.log(
      `${fullName} co tien dien la ${
        (power - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850
      }vnd`
    );
  } else {
    var totalMoney =
      (power - 350) * 1300 + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100;
  }
  console.log(`${fullName} co tien dien la ${totalMoney} vnd`);
  return totalMoney;
  console.log("haha");
}
electricityBill(50);
