import { questionsService } from "../services/QuestionsService.js";


export class QuestionsController {

  constructor(parameters) {

  }

  async getQuestions() {
    try {

      await questionsService.getQuestions()

    } catch (error) {

      console.error('Could not retrieve questions from API', error);

    }

  }

}