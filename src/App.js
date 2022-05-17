import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => {
    return (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        addTask={addTask}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskComplete={toggleTaskComplete}
      ></Todo>
    );
  });
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === tasks.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

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
      <div className="flex justify-center gap-2">{filterList}</div>
      <h2>{headingText}</h2>
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
