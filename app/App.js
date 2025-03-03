import { QuestionsController } from "./controllers/QuestionsController.js"

class App {

  questionsController = new QuestionsController()

}

window['app'] = new App()


