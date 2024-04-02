import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={() => {}}/> ); //Se crea sujeto de pruebas
        const input = screen.getByRole('textbox'); //Se obtiene el input

        fireEvent.input( input, { target: { value: 'Saitama' } } ); //Disparamos el evento
        //screen.debug();
        expect( input.value ).toBe('Saitama');//Verificamos que se haya cambiado el texto

    })
    test('Debe de llamar onNewCategory', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); //Un Mock

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();//Verificar que fue llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);//solo llamada 1 vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );//Que fue llamada con el valor del inputValue


    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn(); //Un Mock
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );     

        expect( onNewCategory ).not.toHaveBeenCalled();//Verificar que fue llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(0);//solo llamada 1 vez

     })
 })