import React, { useState } from "react";

export default function Component() {
  const [text, setText] = useState();
  const [updated, setUpdate] = useState();

  const textOnchange = (event) => {
    setText(event.target.value);
  };

  const buttonOnclick = () => {
    setUpdate(text);
  };

  return (
    <div>
      <input type="text" onChange={textOnchange} />
      <button onClick={buttonOnclick}>Actualizar</button>
      <p>Esto es un parrafo: {text}</p>
      <p>Esto es un segundo parrafo: {updated}</p>
    </div>
  );
}
