import { initializeIcons, Stack } from '@fluentui/react'
import { SurveyFreeText } from './components/surveys/SurveyFreeText'
import jsonData from './data/survey_results.json'
import { QuestionType } from './components/shared/types'
import { HappinessScore } from './components/score/HappinessScore'
import { Header } from './components/header/Header'
import { type FunctionComponent } from 'react'

initializeIcons()

export const App: FunctionComponent = () => {
  const { questions } = jsonData
  const freeTextQuestions = questions.filter((question) =>
    question.type === QuestionType.Text)

  return (
    <Stack style={{ margin: 20 }}>
      <Header data={jsonData}/>
      <HappinessScore questions={questions}/>
      <Stack>
        <SurveyFreeText freeTextQuestions={freeTextQuestions}/>
      </Stack>
    </Stack>
  )
}

export default App
