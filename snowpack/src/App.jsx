import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
const myWorker = new Worker(new URL("./worker.js", import.meta.url));

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    myWorker.onmessage = function (event) {
      console.log("Received message from worker:", event.data);
    };
    myWorker.postMessage(5);
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <div className="bg-blue-500">
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
      <header>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
      <Link to="/hello">hello</Link>
    </div>
  );
}

export default App;
