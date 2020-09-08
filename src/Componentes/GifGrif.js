import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrif = ({category}) => {

const {data:images,loading} = useFetchGifs(category);

    // getGifs();


    return (
        <>
        <h3 className= "animate__animated animate__bounce"> {category}</h3>
        {loading ? 'Cargando...': ''}
        
        <div className= "card-grid">
                            {
                    images.map( img => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}/>
                    ))
                }
            
        </div>
        </>
    )
}
