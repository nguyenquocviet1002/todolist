import React, { useState, useRef, useEffect } from "react";

function Todo(props) {
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const [newName, setNewName] = useState("");
  function handelChange(e) {
    setNewName(e.target.value);
  }
  function handelSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  const [isEditing, setEditing] = useState(false);
  const editingTemplate = (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor={props.id}>New name for {props.name}</label>
        <input
          type="text"
          id={props.id}
          className="w-full border-black border-2"
          value={newName}
          onChange={handelChange}
          ref={editFieldRef}
        />
      </div>
      <div className="mt-2 text-base flex gap-2">
        <button
          className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button className="max-w-full w-1/2 h-10 bg-black border-2 border-black text-white">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="mt-7" key={props.id}>
      <div className="flex items-center">
        <input
          id={props.id}
          type="checkbox"
          className="w-[20px] h-[20px]"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskComplete(props.id, props.completed)}
        />
        <label htmlFor={props.id} className="ml-2">
          {props.name}
        </label>
      </div>
      <div className="mt-2 text-base flex gap-2">
        <button
          type="button"
          className="max-w-full w-1/2 h-10 max-w-1000vh border-2 border-current"
          children
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit
        </button>
        <button
          type="button"
          className="max-w-full w-1/2 h-10 bg-[#ca3c3c] border-2 border-[#bd2130] text-white"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
  function usePrevisions(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const wasEditing = usePrevisions(isEditing);
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);
  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
