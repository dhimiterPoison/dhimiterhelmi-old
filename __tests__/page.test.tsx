import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import { describe, it} from 'node:test'
import { experimental_useEffectEvent } from 'react'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    // experimental_useEffectEvent(heading).toBeInTheDocument()
  
  })
})