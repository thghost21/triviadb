// @ts-ignore
const questionsAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10',
  timeout: 3000
})

class QuestionsService {
  async getQuestions() {

    const response = await questionsAPI.get()
    console.log('Retrieved questions', response)

  }
}

export const questionsService = new QuestionsService()