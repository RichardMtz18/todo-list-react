import { useState } from "react";

function ListItem({text, onDelete}){
    const [checked, setChecked] = useState(false);


    const handleCheck = () => {

        setChecked(!checked);
    }
    return (
    <li className={`rounded-md p-2 bg-indigo-800 ${checked ? 'text-green-400 line-through' : null}`}>
        {text} <input type="checkbox" checked={checked} onChange={handleCheck}/>
    </li>
    );
}

export default ListItem;