export enum QuestionType {
  Text = 'text',
  Number = 'number',
};

export interface Question {
  question_text: string
  type: QuestionType
  responses: Array<number | string>;
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
  survey_title: string
  created_at: string
  questions: Question[] 
}

const isQuestionOfType = <T extends QuestionType>(type: T) =>
    (question: Question): question is Extract<Question, { type: T }> =>
        question.type === type;

export const isFreeTextQuestion = isQuestionOfType(QuestionType.Text);
export const isScaleQuestion = isQuestionOfType(QuestionType.Number);