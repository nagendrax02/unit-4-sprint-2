import { useState } from "react";
import {v4 as uuid} from 'uuid';
import './GroceryInput.css'

const GroceryInput = ({handleAddBtn})=>{
    const [item, setItem] = useState('');
    const data = {
        title: item,
        status :'false',
        id: uuid(),

    }
    const handleChange =(e)=>{
        setItem(e.target.value);
    }
    const handleClick =(el)=>{
        handleAddBtn(data,el.target.innerText);
    }
    return(
        <div className='input-div'>
            <input type="text" placeholder='Enter anything' onChange={handleChange} />
            <button onClick={handleClick}>Add to final list</button>
            <button onClick={handleClick} >Add to wish list</button>
        </div>
    )
}
export {GroceryInput};