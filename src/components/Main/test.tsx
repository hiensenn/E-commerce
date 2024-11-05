import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories';

import Main from '.'

const { Default } = composeStories(stories);

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })

  it('should render stories', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })

  
})

describe('Main Component Stories', () => {
  it('should render the default story correctly', () => {
    render(<Default />);

    expect(screen.getByRole('heading', { name: /React Avançado/i })).toBeInTheDocument();
    expect(
      screen.getByAltText(/Imagem de um átomo e React Avançado escrito ao lado./i)
    ).toBeInTheDocument();
  });
});