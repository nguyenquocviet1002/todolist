import Todo from "./components/Todo";
const data = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];
const ele = data.map((item, index) => {
  return (
    <Todo name={index.name} completed={index.completed} id={index.id}/>
  )
})
console.log(ele)
function App() {
  return (
    <div className="bg-white w-1/3 h-full mx-auto mt-5 shadow-md p-10">
      <h1 className="text-3xl text-center font-semibold">Todo List</h1>
      <ul>
        {/* <Todo name={data.name} completed={data.completed} id={data.id}/> */}
      </ul>
    </div>
  );
}

export default App;
