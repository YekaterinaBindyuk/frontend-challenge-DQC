import { type FunctionComponent, useMemo } from 'react'

import { CheckboxVisibility, DetailsList, Stack } from '@fluentui/react'

import { TITLE, TITLE_MIN_WIDTH } from './const'
import { getGroups, getItems } from './helpers'
import type { SurveyFreeTextProps } from './types'

export const SurveyFreeText: FunctionComponent<SurveyFreeTextProps> =
  ({ freeTextQuestions }) => {
    const groups = useMemo(() => getGroups(freeTextQuestions),
      [freeTextQuestions])
    const items = useMemo(() => getItems(freeTextQuestions),
      [freeTextQuestions])
    const _onRenderColumn = (item?: string): JSX.Element => {
      return <div data-is-focusable={true}>{item}</div>
    }

    return (
      <Stack data-testid="FreeTextTable">
        <DetailsList
          checkboxVisibility={CheckboxVisibility.hidden}
          items={items}
          groups={groups}
          columns={[{ key: TITLE, name: TITLE, minWidth: TITLE_MIN_WIDTH }]}
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          checkButtonAriaLabel="select row"
          checkButtonGroupAriaLabel="select section"
          groupProps={{
            isAllGroupsCollapsed: true,
            showEmptyGroups: true
          }}
          compact={true}
          onRenderItemColumn={_onRenderColumn}
        />
      </Stack>
    )
  }
