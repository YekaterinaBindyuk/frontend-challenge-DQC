import { render } from '@testing-library/react'

import { type FreeTextQuestion, QuestionType } from '../../shared/types'
import { SurveyFreeText } from '../SurveyFreeText'
const mockedQuestionsData: FreeTextQuestion[] = [{
  question_text: 'What data is NOT always reliable and correct?',
  type: QuestionType.Text,
  responses: [
    'Budget',
    'HR master data',
    'Values of different items and tasks',
    // eslint-disable-next-line max-len
    'As different functions sometimes have different de…ross-functional comparison is sometimes difficult',
    'Theoretically similar data definitions are different across geographies',
    'Supplier data is often incomplete or lacking at all'
  ]
}
]

describe('SurveyFreeText Component', () => {
  test('renders the component', () => {
    const container = render(<SurveyFreeText
    freeTextQuestions={mockedQuestionsData} />)
    expect(container).toMatchSnapshot()
  })

  test('Correctly group data and show table', () => {
    const { getByTestId } = render(<SurveyFreeText
    freeTextQuestions={mockedQuestionsData} />)
    expect(getByTestId('FreeTextTable').textContent).toMatch(
      /What data is NOT always reliable and correct\?\(6\)/
    )
  })
})
