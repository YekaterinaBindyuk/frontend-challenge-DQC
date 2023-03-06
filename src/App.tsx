import type { FunctionComponent } from 'react'

import { initializeIcons, Stack } from '@fluentui/react'

import { Header } from './components/header/Header'
import { type FreeTextQuestion, 
  isFreeTextQuestion, 
  type SurveyResults }
  from './components/shared/types'
import { SurveyFreeText } from './components/surveys/SurveyFreeText'
import jsonData from './data/survey_results.json'

import styles from './App.module.css'; 

initializeIcons()

export const App: FunctionComponent = () => {
  const {
    questions, survey_title: surveyTitle,
    created_at: createdAt
  } = jsonData as SurveyResults;
 
const freeTextQuestions: FreeTextQuestion[] =
 questions.filter<FreeTextQuestion>( isFreeTextQuestion)

  return (
    <Stack  className={styles.root}>
      <Header title={surveyTitle} creationDate={createdAt}
      questions={questions}/>
      <Stack>
        <SurveyFreeText freeTextQuestions={freeTextQuestions}/>
      </Stack>
    </Stack>
  )
}

export default App
