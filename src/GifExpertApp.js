import React from 'react'
import  {useState}  from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrif } from './Componentes/GifGrif';

export const GifExpertApp = () => {
   
   

   const [categories, setcategories] = useState(['Rocky']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories= {setcategories}  />
            <hr />

          

        <ol>

        {
            categories.map( category => (
            <GifGrif 
               key={category} 
               category = {category}/>
            ))
        }

        </ol>


        </>
    )
}
