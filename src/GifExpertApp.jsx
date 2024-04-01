import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Morty' ])

    //console.log(categories)
    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory) ){
            return
        }
        //categories.push('Valorant')
        setCategories( [newCategory,...categories] )
        //setCategories( cat => [...cat,'Valorant'] )
    }

  return (
    <>
        {/* Titul */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory /* setCategories= {setCategories}  */
            onNewCategory={(value) => onAddCategory(value) }
        />

        {/* Listaddo de Gif */}
       {/*  <button onClick={onAddCategory}>Agregar</button> */}
 
            {   categories.map( (category)=> (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                )) 
            }
          {/*   <li>ABC</li> */}
        
            {/* GIF Item */}
    </>
  )
}
