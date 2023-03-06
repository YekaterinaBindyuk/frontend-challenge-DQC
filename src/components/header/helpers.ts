import { PREFERABLE_LOCALE } from '../shared/const'
import { type Question } from '../shared/types'

export const getFormattedDate = (createdAt: string): string => {
  const isValidDate = Boolean(Date.parse(createdAt))
  if (isValidDate) {
    return new Date(createdAt).toLocaleDateString(PREFERABLE_LOCALE)
  }
  return ''
}

export const getMaxResponsesCount = (questions: Question[]): number =>
  questions.reduce((accumulator, current) =>
    current.responses.length > accumulator
      ? current.responses.length
      : accumulator, 0)
