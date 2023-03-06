import type { Question } from '../shared/types'

export interface HeaderProps {
  title: string
  questions: Question[]
  creationDate: string
}
