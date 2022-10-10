// Crud
// Create
// function createProduct() {
// }
// ReadData
let productList = [];

async function getData() {
  try {
    let { data } = await axios({
      url: "https://6343863c3f83935a7854ae81.mockapi.io/captone",
      method: "GET",
    });
    productList = mapData(data);
    renderData(data);
  } catch (err) {
    console.log(err);
  }
}
window.onload = function () {
  getData();
};

// copy lai lop doi tuong de khong bi mat method
function mapData(data) {
  if (!data) data = productList;
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const oldProduct = data[i];
    const newProduct = new Products(
      oldProduct.name,
      oldProduct.price,
      oldProduct.screen,
      oldProduct.backCamera,
      oldProduct.frontCamera,
      oldProduct.img,
      oldProduct.desc,
      oldProduct.type
    );
    result.push(newProduct);
  }
  return result;
}

// render toan bo du lieu
function renderData(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += ` <div class="col-3 mt-3">
    <div
      class="card"
      style="width: 16rem; border-radius: 2rem; border-color: black"
    >
      <img
        src='${data[i].img}'
        class="card-img-top mt-2"
        alt="..."
        style="width: 100%; border-radius: 2rem; border: none"
      />
      <div class="card-body">
        <h5 class="card-title text-center">${data[i].name}</h5>
        <p class="text-center">Giá : ${data[i].price}</p>
      </div>
      <div class="detailProduct">
        <h4>Thông số sản phẩm</h4>
        <p> ${data[i].name}</p>
        <p>Screen : ${data[i].screen}</p>
        <p>blackcamera : ${data[i].backCamera}</p>
        <p>front camera : ${data[i].frontCamera}</p>
        <p>${data[i].desc}</p>
        <button class="mt-2 btn btn-outline-info ms-5">Buy Now</button>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("renderhtml").innerHTML = html;
}

// renderSearch
function searchType() {
  let phoneType = document.getElementById("typePhone").value;
  let results = [];

  if (!phoneType) {
    results = productList;
  } else {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].type === phoneType) {
        results.push(productList[i]);
      }
    }
  }

  renderData(results);
}
