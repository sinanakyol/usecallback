import "./App.css";

import { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  //*** dependency array içerisine "number" değişkenini verdiğimizde her defasında gereksiz render işlemi olur. Bu nedenle "prevState" kullandık. */
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />

      <hr />

      <h1>{number}</h1>
    </div>
  );
}

export default App;
