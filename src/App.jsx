import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [num, setNum] = useState(0);

  const handleCalc = (opeartion) => {
    if (isNaN(num)) {
      alert("Please enter valid number");
      return;
    }
    switch (opeartion) {
      case "+":
        setResult(result + num);
        break;
      case "-":
        setResult(result - num);
        break;
      case "*":
        setResult(result * num);
        break;
      case "/":
        if (parseFloat(num) === 0) {
          alert("Can't divide by 0");
          return;
        }
        setResult(result / num);
        break;
    }
  };

  return (
    <div className="container">
      <h1>Simplest Working Calculator</h1>
      <p>{result}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          onChange={(e) => setNum(parseFloat(e.target.value))}
          value={num}
        />
        <button type="submit" onClick={() => handleCalc("+")}>
          Add
        </button>
        <button type="submit" onClick={() => handleCalc("-")}>
          Substract
        </button>
        <button type="submit" onClick={() => handleCalc("*")}>
          Multiply
        </button>
        <button type="submit" onClick={() => handleCalc("/")}>
          Divide
        </button>
        <button className="primary" type="submit" onClick={() => setNum(0)}>
          Reset input
        </button>
        <button className="primary"
          type="submit"
          onClick={() => {
            setResult(0), setNum(0);
          }}
        >
          Reset default
        </button>
      </form>
    </div>
  );
}

export default App;
