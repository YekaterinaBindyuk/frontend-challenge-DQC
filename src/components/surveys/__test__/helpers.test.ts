import { QuestionType, type FreeTextQuestion } from '../../shared/types'
import { getGroups, getItems } from '../helpers'

const mockedQuestionsData: FreeTextQuestion[] = [{
    question_text: 'What data is NOT always reliable and correct?',
    type: QuestionType.Text,
    responses: [
        'Budget',
        'HR master data',
        'Values of different items and tasks',
        // eslint-disable-next-line max-len
        'As different functions sometimes have different de…ross-functional comparison is sometimes difficult',
        // eslint-disable-next-line max-len
        'Theoretically similar data definitions are different across geographies',
        'Supplier data is often incomplete or lacking at all'
    ]
}, {
    question_text: 'Which skills would you like to learn?',
    type: QuestionType.Text,
    responses: [
        'Data quality evaluation',
        'Analytics in BI tools',
        'Data visualization',
        'Analytics',
        'None'
    ]
}
]

const emptyMockedQuestionsData: FreeTextQuestion[] = [{
    question_text: 'Which one do you think is missing?',
    type: QuestionType.Text,
    responses: []
}
]

const expectedItems = [
    'Budget',
    'HR master data',
    'Values of different items and tasks',
    // eslint-disable-next-line max-len
    'As different functions sometimes have different de…ross-functional comparison is sometimes difficult',
    'Theoretically similar data definitions are different across geographies',
    'Supplier data is often incomplete or lacking at all',
    'Data quality evaluation',
    'Analytics in BI tools',
    'Data visualization',
    'Analytics',
    'None'
]
describe('getItems', () => {
    it('Should return [] if the question list is empty', () => {
        const res = getItems([])
        expect(res).toStrictEqual([])
    })
    it('Should return [] if the responses lists are empty', () => {
        const res = getItems(emptyMockedQuestionsData)
        expect(res).toStrictEqual([])
    })
    it('Should return all the responses for the question', () => {
        const res = getItems(mockedQuestionsData)
        expect(res).toStrictEqual(expectedItems)
    })
})

const expectedGroups = [{
    key: 'What data is NOT always reliable and correct?',
    name: 'What data is NOT always reliable and correct?',
    startIndex: 0,
    count: 6
},
{
    key: 'Which skills would you like to learn?',
    name: 'Which skills would you like to learn?',
    startIndex: 6,
    count: 5
}
]

const emptyGroup = {
    key: 'Which one do you think is missing?',
    name: 'Which one do you think is missing?',
    startIndex: 0,
    count: 0
}

describe('getGroups', () => {
    it('Should return [] if the question list is empty', () => {
        const res = getGroups([])
        expect(res).toStrictEqual([])
    })
    it('Should return an empty group if its responses list is empty', () => {
        const res = getGroups(emptyMockedQuestionsData)
        expect(res).toStrictEqual([emptyGroup])
    })
    it('Should return all the responses for the question', () => {
        const res = getGroups(mockedQuestionsData)
        expect(res).toStrictEqual(expectedGroups)
    })
})
