import { render, screen } from "@testing-library/react"
import { GifGrilItem } from "../../src/components"

describe('Pruebas en GifGrilItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Match con el snapshot', () => { 
        const {container} =render(<GifGrilItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar la imagen coon la URL y el ALT indicado',() =>{
        render(<GifGrilItem title={title} url={url}/>)
        screen.debug();
        expect( screen.getByRole('img').src).toBe(url);
    })

    test('debe de mostrar el titulo en el texto alternativo',() =>{
        render(<GifGrilItem title={title} url={url}/>)
        screen.debug();
        expect( screen.getByRole('img').alt).toBe(title);
    })
    
    test('Una forma de probar las 2 condiciones anteriores a la vez',() =>{
        render(<GifGrilItem title={title} url={url}/>)
        /* screen.debug(); */
        const {src,alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente',() =>{
        render(<GifGrilItem title={title} url={url}/>)
        expect( screen.getByText( title ) ).toBeTruthy();
    })
 })