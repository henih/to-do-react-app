import { useState } from "react";
import "./App.css";

export default function App() {
  const [list, setList] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(list);
  }

  function updateList(event) {
    setList(event.target.value);
  }

  return (
    <div className="mt-5 App text-center">
      <h1>🚀 Achieve anything</h1>
      <form onSubmit={handleSubmit} className="">
        <input
          className="m-3 w-50 p-2"
          type="text"
          placeholder="What tasks do I have to achieve?"
          onChange={updateList}
        ></input>
        <input type="submit" value="Add" className="p-2"></input>
      </form>
    </div>
  );
}
