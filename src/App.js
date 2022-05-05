import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="bg-white w-1/3 h-full mx-auto mt-5 shadow-md p-10">
      <h1 className="text-3xl text-center font-semibold">Todo List</h1>
      <Form handelSubmit={addTask} />
      <div className="flex justify-center gap-2">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2>3 tasks remaining</h2>
      <Todo data={tasks} />
    </div>
  );
}

export default App;
