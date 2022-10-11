class FillInBlank extends Question {
  constructor(id, type, content, answers) {
    super(id, type, content, answers);
  }
  render(index) {
    return `
    <h3> Cau ${index} ${this.content}</h3>
    <input type="text">
    `;
  }
}
