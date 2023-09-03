import React from "react";
import "./App.css";
import Input from "./Input.js";

export default function App() {
  

  return (
    <div className="mt-5 App text-center">
      <header>
        <h1>🚀 Achieve anything</h1>
      </header>
      <main>
        <Input />
      </main>
      <footer>
        <p>
          <small>
            Coded by{" "}
            <a
              href="mailto:horvath.henriett@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Henriett Horvath
            </a>{" "}
            & available open-sourced on{" "}
            <a
              href="https://github.com/henih/to-do-react-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
          </small>
        </p>
      </footer>
    </div>
  );
}
