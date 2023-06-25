import { useState } from "react";
import "./App.css";
import Button from "./Component/Button";

function App() {
  const [count, setCount] = useState(0);
  const name = "musa";
  return (
    <div>
      <p>App</p>
      <Button data={name} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
