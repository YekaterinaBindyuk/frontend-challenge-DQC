import { MAX_HAPPINESS_SCORE, HAPPINESS_SCALE } from '../shared/const'
import { type ScaleQuestion } from '../shared/types'

export const getHappinessScore = (questions: ScaleQuestion[]): number => {
  let answersCount = 0
  if (questions.length === 0) {
    return 0
  }
  const answersTotalScore = questions.reduce((accumulator: number,
    currentQuestion: ScaleQuestion) => {
    accumulator += currentQuestion.responses.reduce((acc: number,
      currentResponse: number) => {
      if (currentResponse > 1) {
        acc += currentResponse
      }
      return acc
    }, 0)
    answersCount += currentQuestion.responses.length
    return accumulator
  }, 0)

  if (!answersTotalScore) {
    return 0
  }
  const scaleRatio = MAX_HAPPINESS_SCORE / HAPPINESS_SCALE
  const answersAverageScore = answersTotalScore / answersCount
  const happinessScore = Math.round(scaleRatio * answersAverageScore)
  return happinessScore
}
