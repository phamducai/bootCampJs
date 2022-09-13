const names = "phamducai";
const math = 9;
const physical = 1;
const chemistry = 9;
const medium = (math + physical + chemistry) / 3;
if (medium > 8.5) {
  console.log(`${names} co diem trung binh ${medium} xep loai gioi`);
} else if (medium > 6.5) {
  console.log(`${names} co diem trung binh ${medium} xep loai kha`);
} else if (medium > 5) {
  console.log(`${names} co diem trung binh ${medium} xep loai trung binh`);
} else {
  console.log(`${names} co diem trung binh ${medium} xep loai yeu`);
}
