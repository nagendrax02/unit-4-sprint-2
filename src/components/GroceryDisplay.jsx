import { useState } from "react"
import './GroceryDisplay.css';

function GroceryDisplay({handleDisplayBtn}){
    const [color, setColor] = useState('white')
    const [boolean , setBoolean] = useState(true);
    const [color1,setColor1] = useState('white');
    const [boolean1, setBoolean1] = useState(true);
    const handleClick = (el)=>{
        handleDisplayBtn(el)
        if(el.target.textContent === 'show wish list'){
            setColor1('white')
            boolean === false ? setColor('green') : setColor('white');
            setBoolean(!boolean);
        }
        else{
            setColor('white');
            boolean1 === false ? setColor1('green') : setColor1('white');
            setBoolean1(!boolean);
        }
        
    }
    // const changeColorWishl = ()=>{
    //     setColor1('white')
    //     boolean === false ? setColor('green') : setColor('white');
    //     setBoolean(!boolean);
    // }
    // const changeColorFinalL = () =>{
    //     setColor('white');
    //     boolean1 === false ? setColor1('green') : setColor1('white');
    //     setBoolean1(!boolean);
    // }
    return (
       <div className='display-btn'>
            <button  style={{backgroundColor:color1}} onClick={handleClick}>show final list</button>
            <button  style={{backgroundColor: color}} onClick={handleClick}>show wish list</button>
        </div>
    )
}
export {GroceryDisplay};