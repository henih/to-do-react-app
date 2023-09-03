import React from "react";
import "./List.css";

export default function List(props) {
  console.log(props.list);
  if (props.list.length <= 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="task-overview">
          <div>
            <h2>To do</h2>
            <div className="to-do-list">
              <ul>
                {props.list.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button className="btn btn-success m-2">
                      Mark as Complete
                    </button>
                    <button className="btn btn-secondary m-2">Modify</button>
                    <button className="btn btn-danger m-2">Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2>Completed</h2>
            <div className="completed-tasks">
              <ul>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
