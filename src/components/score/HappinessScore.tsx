import { FontIcon } from '@fluentui/react'
import { type FunctionComponent, useMemo } from 'react'
import { MAX_HAPPINESS_SCORE } from '../shared/const'
import { getHappinessScore } from './helpers'

export const HappinessScore: FunctionComponent = ({ questions }: any) => {
  const happinessScore = useMemo(() =>
    getHappinessScore(questions), [questions])
  return (<h1 data-testid="happinessScore">
        <FontIcon iconName="ChatBot" style={{ marginRight: '5px' }} />
        {happinessScore} / {MAX_HAPPINESS_SCORE}
    </h1>)
}
