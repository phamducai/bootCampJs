const hour = 50;
const perHour = 500;
if (hour > 40) {
  const wage = (hour - 40) * perHour * 1.5 + 40 * perHour;
  console.log(`so tien phai tra ${wage}`);
} else {
  console(`so tien phai tra ${hour * perHour}`);
}
