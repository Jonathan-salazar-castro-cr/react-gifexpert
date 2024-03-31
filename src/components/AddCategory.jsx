

import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    /* const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    } */
    const onInputChange = ({target}) => {
       // console.log(target.value)
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault(); //Evita que recarge la pagina al presionar enter
        console.log(inputValue);
        const inputClean = inputValue.trim();
        if( inputClean.trim().length <= 1) return;
       // setCategories(cat =>[ ...cat,inputValue]);
       onNewCategory(inputClean)
       setInputValue('');
     }
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={ onInputChange }
            /* onChange={ (event) => onInputChange(event) } */
        />
    </form>
  )
}
