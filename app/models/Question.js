export class Question {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.allAnswers = data.incorrect_answers
    this.allAnswers.push(this.correctAnswer)

  }



  get answersFormatted() {
    let answerBlock = ''
    this.allAnswers.forEach(answer => answerBlock += `<div class="mb-2">
                                                      <button onclick="app.questionsController.checkAnswer(${answer == this.correctAnswer})" role="button" class="col-6 btn btn-primary">${answer}</button>
                                                      </div>`,
    );
    return answerBlock
  }




  // get guessesButtons() {
  //   if (this.type == 'boolean') {
  //     return `<div class="mb-2">
  //               <button role="button" class="col-6 btn btn-primary">${this.allAnswersForButtons}</button>
  //             </div>
  //             `
  //   }
  //   return
  // }


  get questionCard() {
    return `
    <div class="col-6 my-3">
          <div class="bg-primary rounded text-light textShadow">
            <span>Question 1: ${this.category}</span>
            <span class="ms-2">${this.difficulty}</span>
          </div>
          <div class="shadow">
            <div>
              <p>${this.question}</p>
            </div>
            <div class="d-flex justify-content-between px-2 flex-column text-center">
              ${this.answersFormatted}
            </div>
            
          </div>
        </div>
    `
  }
}
//<div class="mb-2">
//   <button role="button" class="col-6 btn btn-primary">Answer 1</button>
// </div>