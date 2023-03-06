import { render } from '@testing-library/react'

import { QuestionType, type ScaleQuestion } from '../../shared/types'
import { HappinessScore } from '../HappinessScore'

const mockedQuestionsData: ScaleQuestion[] = [{
  question_text: 'I work with data that is always reliable and correct',
  type: QuestionType.Number,
  responses: [
    5, 5, 5, 1, 1, 1
  ]
}
]
describe('HappinessScore Component', () => {
  test('renders the component', () => {
    const container = render(<HappinessScore
    questions={mockedQuestionsData}/>)
    expect(container).toMatchSnapshot()
  })

  test('Correctly calculate overall score', () => {
    const { getByTestId } = render(<HappinessScore
    questions={mockedQuestionsData}/>)
    expect(getByTestId('happinessScore').textContent).toMatch(/50/)
  })
})
