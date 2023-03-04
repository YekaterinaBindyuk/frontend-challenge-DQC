import { type IGroup } from '@fluentui/react'
import { type FreeTextQuestion } from '../shared/types'

export const getGroups = (freeTextQuestions: FreeTextQuestion[]): IGroup[] => {
  let startIndex = 0
  const groups = freeTextQuestions.map((question: FreeTextQuestion) => {
    const count = question.responses.length
    const group = {
      key: question.questionText,
      name: question.questionText,
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
