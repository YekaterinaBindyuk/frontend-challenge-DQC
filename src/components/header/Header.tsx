import { FontIcon } from '@fluentui/react'
import { type FunctionComponent } from 'react'
import { getFormattedDate } from './helpers'

export const Header: FunctionComponent = ({ data }: any) => {
  const { survey_title: surveyTitle, created_at: createdAt, questions } = data
  const creationDay = getFormattedDate(createdAt)
  const respondersCount = questions[0].responses.length

  return (<><h1>
        <FontIcon iconName="ClipboardList" style={{ marginRight: '5px' }} />
        {surveyTitle}
        </h1>
        <div>
        This survey was started on {creationDay}.
        Overall, {respondersCount} people participated in the survey.
        </div></>)
}
