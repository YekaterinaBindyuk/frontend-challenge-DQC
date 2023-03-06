import { type FunctionComponent, useMemo } from 'react'

import { FontIcon } from '@fluentui/react'

import { getHappinessScore } from './helpers'
import { type HappinessScoreProps } from './types'
import { MAX_HAPPINESS_SCORE } from '../shared/const'

import styles from './HappinessScore.module.css'; 

export const HappinessScore: FunctionComponent<HappinessScoreProps> =
 ({ questions }) => {
   const happinessScore = useMemo(() =>
     getHappinessScore(questions), [questions])
   return (<h1 data-testid="happinessScore">
    <FontIcon iconName="ChatBot" className={styles.icon} />
    {happinessScore} / {MAX_HAPPINESS_SCORE}
  </h1>)
 }
