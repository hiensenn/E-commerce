import { render, screen } from '@testing-library/react'
import  {Main}  from '.'

describe('<Main />', ()=>{
    it('should render the heading', () => {
        //enderiza o componente
       const {container} = render(<Main />)

        //busca o elemento e verifica a existencia
        expect(
            screen.getByRole('heading', {name: /Hello, World/i})
    ).toBeInTheDocument()


        //gerar snapchot 
        expect(container.firstChild).toMatchSnapshot()
})
})