import { render } from '@testing-library/react'

import App from '../App'

describe('App Component', () => {
  test('renders the component', () => {
    const container = render(<App/>)
    expect(container).toMatchSnapshot()
  })
})
