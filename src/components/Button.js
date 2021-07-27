export default function Button({color,name,onClick}){

    return(
        <button onClick = {onClick} className = 'btn' style = {{backgroundColor:color}}>{name}</button>
    )
}