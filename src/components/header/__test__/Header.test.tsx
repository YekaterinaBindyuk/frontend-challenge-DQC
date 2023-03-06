import { render, type RenderResult, screen } from '@testing-library/react'

import { QuestionType } from '../../shared/types'
import { Header } from '../Header'

const mockedQuestionsData = [{
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

describe('Header Component', () => {
  const setup = (): RenderResult => {
    return render(<Header
            title='business data'
            questions={mockedQuestionsData}
            creationDate='2022-11-16T15:34:53'
        />)
  }
  test('renders the component', () => {
    const container = render(<Header
      title='business data'
      questions={mockedQuestionsData}
      creationDate='2022-11-16T15:34:53'
  />)
    expect(container).toMatchSnapshot()
  })
  test('should render Header FC', () => {
    setup()
    const title = screen.getByText(/business data/i)
    expect(title).toBeInTheDocument()
  })

  test('should render amount of responses', () => {
    setup()
    const respondersSpan = screen.getByTestId('respondersCount')
    expect(respondersSpan).toHaveTextContent(/5/)
  })

  test('should render creation date', () => {
    setup()
    const creationDaySpan = screen.getByTestId('creationDay')
    expect(creationDaySpan).toHaveTextContent(/16.11.2022/)
  })
})
