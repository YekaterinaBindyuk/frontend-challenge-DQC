import { type IGroup } from '@fluentui/react'

import { type FreeTextQuestion } from '../shared/types'

export const getGroups = (freeTextQuestions: FreeTextQuestion[]): IGroup[] => {
  let startIndex = 0
  const groups = freeTextQuestions.map((question: FreeTextQuestion) => {
    const { responses, question_text: questionText } = question
    const count = responses.length
    const group = {
      key: questionText,
      name: questionText,
      count,
      startIndex
    }
    startIndex += count
    return group
  })
  return groups
}

export const getItems = (freeTextQuestions: FreeTextQuestion[]): string[] =>
  freeTextQuestions.reduce((acc: string[], curr: FreeTextQuestion) => {
    acc = [...acc, ...curr.responses]
    return acc
  }, [])
