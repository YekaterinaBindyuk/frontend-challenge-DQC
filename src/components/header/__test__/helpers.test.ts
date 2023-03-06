import { QuestionType } from '../../shared/types'
import { getMaxResponsesCount, getFormattedDate } from '../helpers'

const mockedQuestionsData = [{
  question_text: 'I work with data that is always reliable and correct',
  type: QuestionType.Number,
  responses: [
    5, 5, 5, 1, 1, 1
  ]
}, {
  question_text: 'I have all the skills to work with data in my daily job',
  type: QuestionType.Number,
  responses: [
    5, 3, 4, 4, 4, 3, 4, 5, 4, 4, 5, 2, 2, 4, 5, 3, 3, 2, 5, 3, 3, 4, 5, 2
  ]
}
]

const emptyMockedQuestionsData = [{
  question_text: 'I work with data that is always reliable and correct',
  type: QuestionType.Number,
  responses: []
}
]
describe('getMaxResponsesCount', () => {
  it('Should return 0 if responses are empty', () => {
    const res = getMaxResponsesCount(emptyMockedQuestionsData)
    expect(res).toBe(0)
  })
  it('Should find max number of responses', () => {
    const res = getMaxResponsesCount(mockedQuestionsData)
    expect(res).toBe(24)
  })
})

const mockedDate = '2023-03-05T15:34:53'
const invalidDateString = 'this is invalid date string'

describe('getFormattedDate', () => {
  it('Should return empty string if creationDate is empty', () => {
    const res = getFormattedDate('')
    expect(res).toBe('')
  })
  it('Should return empty string if creationDate is not a valid date', () => {
    const res = getFormattedDate(invalidDateString)
    expect(res).toBe('')
  })
  it('Should return formatted date', () => {
    const res = getFormattedDate(mockedDate)
    expect(res).toBe('5.3.2023')
  })
})
