import { renderHook, waitFor } from '@testing-library/react';
import { useEffectGifs } from '../../src/hooks/useEffectGifs'

describe('Pruebas en useEffectGifs', () => { 
    test('debe de regresar el estado inicial', () => { 
        
        const {result} =renderHook( () => useEffectGifs('One Punch'));
        const {images,isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();//se tiene que es true

    });
    test('debe de regresar una serie de imagenes y isLoading en false', async() => { 
        
        const {result} =renderHook( () => useEffectGifs('One Punch'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();//se tiene que es true

    });
 })