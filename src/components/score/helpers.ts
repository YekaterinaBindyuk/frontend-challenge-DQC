import { QuestionType, type ScaleQuestion } from '../shared/types'
import { MAX_HAPPINESS_SCORE, HAPPINESS_SCALE } from '../shared/const'

export const getHappinessScore = (questions: ScaleQuestion[]): number => {
  let answersCount = 0
  const answersTotalScore = questions.reduce((accumulator: number,
    currentQuestion: ScaleQuestion) => {
    if (currentQuestion.type === QuestionType.Number) {
      accumulator += currentQuestion.responses.reduce((accumulator: number,
        currentResponse: number) => {
        accumulator += currentResponse
        return accumulator
      })
      answersCount += currentQuestion.responses.length
    }
    return accumulator
  }, 0)

  const scaleRatio = MAX_HAPPINESS_SCORE / HAPPINESS_SCALE
  const answersAverageScore = answersTotalScore / answersCount
  const happinessScore = Math.round(scaleRatio * answersAverageScore)
  return happinessScore
}
