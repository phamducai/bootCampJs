const nameProduct = "bcs";
const numberProduct = 90;
const paymentProduct = 1;

if (numberProduct < 50) {
  console.log(nameProduct, "gia tien la", numberProduct * paymentProduct);
} else if (nameProduct > 100) {
  console.log(
    nameProduct,
    "gia tien la",
    numberProduct * paymentProduct * 0.88
  );
} else {
  console.log(
    nameProduct,
    "gia tien la",
    numberProduct * paymentProduct * 0.92
  );
}
