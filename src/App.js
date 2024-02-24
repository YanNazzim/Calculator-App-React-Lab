import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function performOperation(operation) {
    const inputValue = Number(inputRef.current.value);
    switch (operation) {
      case "plus":
        setResult((result) => result + inputValue);
        break;
      case "minus":
        setResult((result) => result - inputValue);
        break;
      case "times":
        setResult((result) => result * inputValue);
        break;
      case "divide":
        setResult((result) => result / inputValue);
        break;
      default:
        break;
    }
    resetInput();
  }

  function handleOperationClick(e, operation) {
    e.preventDefault();
    performOperation(operation);
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    resetInput();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={(e) => handleOperationClick(e, "plus")}>add</button>
        <button onClick={(e) => handleOperationClick(e, "minus")}>subtract</button>
        <button onClick={(e) => handleOperationClick(e, "times")}>multiply</button>
        <button onClick={(e) => handleOperationClick(e, "divide")}>divide</button>
        <br/>
        <br/>
        <button onClick={resetResult}>Reset Input</button>
        <button onClick={resetInput}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
