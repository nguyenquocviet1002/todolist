import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function removeTask(id) {}

  function toggleTaskComplete(id) {
    const updateTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return { ...task };
    });
    setTasks(updateTasks);
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
      <h2>{headingText}</h2>
      <Todo data={tasks} toggleTaskComplete={toggleTaskComplete} />
    </div>
  );
}

export default App;
