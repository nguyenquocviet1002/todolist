import React from "react";

function Todo(props){
    return(
        <li className="mt-7">
            <div className="flex items-center">
                <input id={props.id} type="checkbox" className="w-[20px] h-[20px]" defaultChecked={props.completed}/>
                <label htmlFor={props.id} className="ml-2" >{props.name}</label>
            </div>
            <div className="mt-2 text-base flex gap-2">
                <button type="button" className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current" children>Edit <span className="invisible">{props.name}</span></button>
                <button type="button" className="max-w-full w-1/2 h-10 bg-[#ca3c3c] border-2 border-[#bd2130] text-white">Delete <span className="invisible">{props.name}</span></button>
            </div>
        </li>
    )
}

export default Todo