import React from "react";

function Todo(props) {
  const data = props.data;
  const ele = data.map((item) => {
    return (
      <li className="mt-7" key={item.id}>
        <div className="flex items-center">
          <input
            id={item.id}
            type="checkbox"
            className="w-[20px] h-[20px]"
            defaultChecked={item.completed}
          />
          <label htmlFor={item.id} className="ml-2">
            {item.name}
          </label>
        </div>
        <div className="mt-2 text-base flex gap-2">
          <button
            type="button"
            className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current"
            children
          >
            Edit
          </button>
          <button
            type="button"
            className="max-w-full w-1/2 h-10 bg-[#ca3c3c] border-2 border-[#bd2130] text-white"
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return <ul>{ele}</ul>;
}

export default Todo;
