import { PREFERABLE_LOCALE } from '../shared/const'

export const getFormattedDate = (createdAt: any): string =>
  new Date(createdAt).toLocaleDateString(PREFERABLE_LOCALE)
