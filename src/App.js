import React, { useState, useRef, useEffect } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import instance from "./api/ApiConfig";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    instance
      .get("todo/")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {});
  }, []);

  const [filter, setFilter] = useState("All");
  function usePrevisions(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevTaskLength = usePrevisions(tasks.length);
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);
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
      />
    );
  });
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { name: name, completed: false };
    instance
      .post("todo/", newTask)
      .then((res) => {
        setTasks([...tasks, res.data]);
      })
      .catch((err) => {});
  }

  function deleteTask(id) {
    instance
      .delete(`todo/${id}`)
      .then((res) => {
        const remainingTasks = tasks.filter((task) => res.data.id !== task.id);
        setTasks(remainingTasks);
      })
      .catch((err) => {});
  }

  function editTask(id, newName) {
    const newTask = { name: newName };
    instance
      .put(`todo/${id}`, newTask)
      .then((res) => {
        const editedTaskList = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, name: newName };
          }
          return task;
        });
        setTasks(editedTaskList);
      })
      .catch((err) => {});
  }

  function toggleTaskComplete(id, newCom) {
    const newCompleted = { completed: !newCom };
    instance
      .put(`todo/${id}`, newCompleted)
      .then((res) => {
        const updateTasks = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, completed: !task.completed };
          }
          return { ...task };
        });
        setTasks(updateTasks);
      })
      .catch((err) => {});
  }
  const listHeadingRef = useRef(null);

  return (
    <div>
      <div className="bg-white w-1/3 h-full mx-auto mt-5 shadow-md p-10">
        <h1 className="text-3xl text-center font-semibold">Todo List</h1>
        <Form handelSubmit={addTask} />
        <div className="flex justify-center gap-2">{filterList}</div>
        <h2 tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul>{taskList}</ul>
      </div>
    </div>
  );
}

export default App;
