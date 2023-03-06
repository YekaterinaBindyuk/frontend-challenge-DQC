import { QuestionType, type ScaleQuestion } from '../../shared/types'
import { getHappinessScore } from '../helpers'

const mockedQuestionsData: ScaleQuestion[] = [{
    question_text: 'I work with data that is always reliable and correct',
    type: QuestionType.Number,
    responses: [
        5, 5, 5, 1, 1, 1
    ]
}, {
    question_text: 'I have all the skills to work with data in my daily job',
    type: QuestionType.Number,
    responses: [
        5, 5, 1, 1
    ]
}
]

const emptyMockedQuestionsData: ScaleQuestion[] = [{
    question_text: 'I work with data that is always reliable and correct',
    type: QuestionType.Number,
    responses: []
}
]
describe('getHappinessScore', () => {
    it('Should return 0 if question list is empty', () => {
        const res = getHappinessScore([])
        expect(res).toBe(0)
    })
    it('Should return 0 if responses list is empty on all questions', () => {
        const res = getHappinessScore(emptyMockedQuestionsData)
        expect(res).toBe(0)
    })
    it('Should find max number of responses', () => {
        const res = getHappinessScore(mockedQuestionsData)
        expect(res).toBe(50)
    })
})
