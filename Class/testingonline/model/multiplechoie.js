class Multiplechoice extends Question {
  constructor(id, type, content, answers) {
    super(id, type, content, answers);
  }
  render(index) {
    // code
    // return giaohien html cua cau hoi dung
    let HTML = "";

    for (let item of this.answers) {
      HTML += `  <div>
      <input type="radio" name='answer-${this.id}' class='answer-${this.id}' id="${item.id}" value='${item.id}'/>
      <label for="">${item.content} </label>
    </div>`;
    }
    return `<div> 
    <h3> Cau ${index}:${this.content}</h3> 
      ${HTML}
  `;
  }
  checkExact() {
    // 1kiem tra xem nguoi dung chon input =>true
    const inputArr = document.getElementsByClassName(`answer-${this.id}`);
    let answerID;

    for (let input of inputArr) {
      if (input.checked) {
        answerID = input.value;
      }
    }

    if (!answerID) return false;
    // 2. luu id dap an vao trong value inputmso do khi chon put=>id dap an
    // 3.dua vao id tim trong mang dap an doi .tuong dap an=>exact
    function test(item) {
      return item.id === answerID;
    }
    const foundAnser = this.answers.find(test);

    return foundAnser.exact;
  }
}
