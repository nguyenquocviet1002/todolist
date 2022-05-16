import React, { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const editingTemplate = (
    <form>
      <div>
        <label htmlFor="todo__label">New name for {props.data.name}</label>
        <input
          type="text"
          id="todo__label"
          className="w-full border-black border-2"
          input={props.data.id}
        />
      </div>
      <div className="mt-2 text-base flex gap-2">
        <button className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current">
          Cancel
        </button>
        <button className="max-w-full w-1/2 h-10 bg-black border-2 border-black text-white">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={props.data.id}
          className="w-[20px] h-[20px]"
          defaultChecked={props.data.completed}
          onChange={() => props.toggleTaskComplete(props.data.id)}
        />
        <label htmlFor={props.data.id} className="ml-2">
          {props.data.name}
        </label>
      </div>
      <div className="mt-2 text-base flex gap-2">
        <button
          type="button"
          className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current"
        >
          Edit
        </button>
        <button
          type="button"
          className="max-w-full w-1/2 h-10 bg-[#ca3c3c] border-2 border-[#bd2130] text-white"
          onClick={() => props.deleteTask(props.data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
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
            onChange={() => props.toggleTaskComplete(item.id)}
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
            onClick={() => props.deleteTask(item.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{ele}</ul>
    </div>
  );
}

export default Todo;
