import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";




export class QuestionsController {

  constructor(parameters) {
    AppState.on('questions', this.drawQuestions)
  }

  async getQuestions() {
    try {

      await questionsService.getQuestions()

    } catch (error) {

      console.error('Could not retrieve questions from API', error);

    }

  }

  drawQuestions() {
    const questions = AppState.questions
    let questionsCardContent = ''
    questions.forEach(question => questionsCardContent += question.questionCard)
    const questionsCardElem = document.getElementById('questionCardArea')
    questionsCardElem.innerHTML = questionsCardContent


  }

}