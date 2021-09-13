import './GroceryList.css'
function GroceryList({list}){
    console.log(list)
    return(
            <>
            {list.map(el=>{
                return <div className='item-div'>Grocerry Item-<p  id={el.id}>{el.title}</p> </div>
            })}
        </>
    )
}
export {GroceryList};