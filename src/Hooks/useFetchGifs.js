import { useEffect, useState } from 'react';
import { getGifs } from '../Helpers/getGifs';


export const useFetchGifs = (category) => {

    const [images, setImages] = useState ([]); //hooks
    const [isLoading, setIsLoading] = useState (true); //hooks

    const getImages = async () => { // el async regresa una promesa
        const newImages = await getGifs ( category );
        setImages(newImages);
        setIsLoading(false);
        }   

    useEffect( () =>{      //Es un HOOK
      getImages(); 
    }, [])  

    return {
        images,
        isLoading,
    }
  
}
