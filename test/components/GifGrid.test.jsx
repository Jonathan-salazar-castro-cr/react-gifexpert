import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useEffectGifs } from "../../src/hooks/useEffectGifs"

jest.mock('../../src/hooks/useEffectGifs')//un mock completo del path

describe('Pruebsa en GifGrid', () => { 
    const category = 'One Punch'
    
    test('Debe de mostar el loading inicialmente', () => { 
        useEffectGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={ category }/>)
        //screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
     })

    test('debe mostrar items cuando se cargan las imagenes useFechGifts', () => { 
        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title:'Goku',
                url: 'https://localhost/saitama.jpg'
            }
        ]
        useEffectGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        render(<GifGrid category={ category }/>)
        expect( screen.getAllByRole('img').length ).toBe(2)//cantidad de imagenes
     })
 })