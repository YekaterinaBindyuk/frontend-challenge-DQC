export enum QuestionType {
  Text = 'text',
  Number = 'number',
};
export interface Question {
  questionText: string
}

export interface ScaleQuestion extends Question {
  type: QuestionType.Number
  responses: number[]
}

export interface FreeTextQuestion extends Question {
  type: QuestionType.Text
  responses: string[]
}

export interface SurveyResults {
  surveyTitle: string
  createdAt: Date
  questions: FreeTextQuestion | ScaleQuestion[]
}
