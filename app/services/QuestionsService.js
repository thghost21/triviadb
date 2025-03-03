import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

// @ts-ignore
const questionsAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10',
  timeout: 3000
})

class QuestionsService {
  async getQuestions() {

    const response = await questionsAPI.get()
    console.log('Retrieved questions', response.data)
    const questions = response.data.results.map(pojo => new Question(pojo))
    AppState.questions = questions

    console.log("questions", AppState.questions);



  }
}

export const questionsService = new QuestionsService()