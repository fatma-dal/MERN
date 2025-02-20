import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from"./components/BoxDisplay"


function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const deleteBox = (indexToRemove) => {
    setBoxes(boxes.filter((index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Box Generator</h1>
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} deleteBox={deleteBox} />
    </div>
  );
}

export default App;
