/*
BT:TRac Nghiem Online
1.Call Apo lay danh sach cau hoi va show ra man hinh(
  2loai cau hoi: chon dap an dung vs dien vao cho trong
)
2.cho nguoi dung lam bai
3.khi nhan nut nop bai+>in ket qua
giao dien
phan tich lop doi tuong
*/

let questionList = [];

const startExam = async () => {
  // 1.call api fetch can mang
  // 2.in danh sahc cau hoi ra man hinh
  try {
    const { data } = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    });

    questionList = mapData(data);
    renderQuestion(questionList);
    document.getElementById("btnSubmit").style.display = "inline-block";
    document.getElementById("btnStart").style.display = "none";
  } catch (error) {}
};
function renderQuestion(data) {
  var questionHTML = "";
  for (let i in data) {
    questionHTML += data[i].render(+i + 1);
  }
  document.getElementById("questionList").innerHTML = questionHTML;
}

window.onload = function () {
  document.getElementById("btnStart").addEventListener("click", startExam);
  document.getElementById("btnSubmit").addEventListener("click", submit);
};

function mapData(dataFromAPI) {
  const result = [];
  console.log(dataFromAPI);
  dataFromAPI.forEach((item) => {
    const { id, questionType, content, answers } = item;
    if (item.questionType === 1) {
      result.push(new Multiplechoice(id, questionType, content, answers));
    } else {
      result.push(new FillInBlank(id, questionType, content, answers));
    }
  });
  console.log(result);
  return result;
}
const submit = () => {
  let correctAnser = 0;
  questionList.forEach((questtion) => {
    if (questtion.checkExact()) {
      correctAnser++;
    }
  });
  alert(`Result :${correctAnser}/${questionList.length}`);
};
