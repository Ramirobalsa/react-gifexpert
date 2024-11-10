import {useState} from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {

    //const [categories, setCategories] = useState (['One Punch', 'Dragon Ball']);
    const [categories, setCategories] = useState (['One Punch']);    

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      //console.log (newCategory);
      setCategories([newCategory, ...categories]);
    }

  return (
    <>          
        <h1>GifExpertApp</h1>  

        <AddCategory             
        onNewCategory = { (value) => onAddCategory (value)} // El onNewCategory es una propiedad de mi componente
        />                                 
            {                
                  categories.map ( (category) => (                
                      <GifGrid key = {category} 
                      category = {category}  />                                
              ))
            }                
       
            {/* Gif de Item */}  
    </>
  )
}



