import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { GroceryDisplay } from "./GroceryDisplay";
import {v4 as uuid} from 'uuid'
import { FinalList } from "./FinalList";
function Grocery(){

    const [itemList, setItemList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [button , setButton] = useState('');

    const handleAdd = (el,whAdd)=>{
        whAdd === 'Add to final list' ? (setItemList([...itemList, el])) : whAdd=== 'Add to wish list' ? (setWishList([...wishList,el])) : (setWishList(wishList));   
    }
    const displayGorceryList =(el)=>{
        
        setButton (el.target.textContent);
    }
    
   console.log(button)

    return(
        <div>
            <GroceryInput handleAddBtn = {handleAdd}></GroceryInput>
            
            <GroceryDisplay handleDisplayBtn = {displayGorceryList}></GroceryDisplay>
            { button === 'show final list' ? (<GroceryList list={itemList}></GroceryList>) : button === 'show wish list' ? (<GroceryList list={wishList}></GroceryList>) : ('') }
            <FinalList item = {itemList}></FinalList>
        </div>
    )
}
export {Grocery};