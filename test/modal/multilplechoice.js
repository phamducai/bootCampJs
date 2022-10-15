class Multiplechoice extends Question {
  // ke thua lop cha
  constructor(id, type, content, answers) {
    super(id, type, content, answers);
  }
  render() {
    let html = "";
    for (let item of this.answers) {
      html += `<div>
      <input type="radio" name='answer-${this.id}' class='answer-${this.id}' id="${item.id}" value='${item.id}'/>
      <label for="${item.id}">${item.content} </label>
    </div>`;
    }
    return `<div>
    <h3> Cau :{this.content}</h3>
      ${html}
  `;
  }
  checkExact() {
    const arrayAnswer = document.getElementsByClassName(`answer-${this.id}`);
    let answer;
    for (let input of arrayAnswer) {
      if (input.checked) {
        answer = input.value;
      }
    }
    if (!answer) return false;
    const foundAnswer = this.answers.find((item) => {
      return item.id === answer;
    });
    return foundAnswer;
  }
}
