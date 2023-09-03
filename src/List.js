import React from "react";

export default function List(props) {
  console.log(props.list);
  if (props.list.length <= 0) {
    return <div></div>;
  } else {
    return (
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

