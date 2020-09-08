 import React, { useState } from 'react'
 import Proptypes from 'prop-types'
 
 export const AddCategory = ({setcategories}) => {

    const [inputvalue, setInputJose] = useState('');
    
    const buscar =(e) =>{
    setInputJose(e.target.value);

    }

   const handleSubmit = (e) =>{
       e.preventDefault ();

console.log(inputvalue.trim().length );

if (inputvalue.trim().length >1){

    setcategories(cats=> [inputvalue,...cats]);
    setInputJose('');

}

   }

     return (
         <form onSubmit ={ handleSubmit}>
            
             <input
             
             type= "text"
              value= {inputvalue}
             onChange={  buscar}
             onClick={ buscar}
             />
             
                      </form>
     )
 }
 
 AddCategory.propTypes = {
     setcategories: Proptypes.func.isRequired
 }