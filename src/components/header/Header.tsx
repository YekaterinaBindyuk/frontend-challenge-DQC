import type { FunctionComponent } from 'react'

import { FontIcon } from '@fluentui/react'

import { getFormattedDate, getMaxResponsesCount } from './helpers'
import type {  HeaderProps } from './types'
import { HappinessScore } from '../score/HappinessScore'
import { isScaleQuestion, type ScaleQuestion } from '../shared/types'

import styles from './Header.module.css'

export const Header: FunctionComponent<HeaderProps> =
 ({ title, questions, creationDate }) => {
   const creationDay = getFormattedDate(creationDate)
   const respondersCount = getMaxResponsesCount(questions)
   const scaleQuestions: ScaleQuestion[] =
   questions.filter<ScaleQuestion>( isScaleQuestion)
   
   return (<><h1>
        <FontIcon iconName="ClipboardList" className={styles.icon} />
        {title}
        </h1>
        <div>
        <span data-testid="creationDay">
          This survey was started on {creationDay}.
        </span>
       {/* eslint-disable-next-line max-len */}
        <span data-testid="respondersCount"> Overall, {respondersCount} people participated in the survey.
        </span>
        </div>
        <HappinessScore questions={scaleQuestions}/>
        </>)
 }
