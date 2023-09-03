import { useState } from "react";
import List from "./List.js";

export default function Input() {
  const [list, setList] = useState([]); //List of tasks should be an array
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, task]); // When the form is submitted, the current task is added to list.
    setTask("");
    console.log(task);
  }

  function updateTask(event) {
    setTask(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <input
          className="m-3 w-50 p-2"
          type="text"
          placeholder="What tasks do I have to achieve?"
          onChange={updateTask}
          value={task}
        ></input>
        <input type="submit" value="Add" className="p-2"></input>
      </form>
      <div className="List">
        <List list={list} />
      </div>
    </div>
  );
}
