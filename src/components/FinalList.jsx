function FinalList({item}) {
    return(
        <>
        {item.map(el=>{
            return <div style={el.status === false ? {backgroundColor:'teal', color:'white'} : {backgroundColor:'black'}}>{el.title}</div>
        })}
        </>
    )
}
export {FinalList};