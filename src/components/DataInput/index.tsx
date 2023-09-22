import React, { useState } from "react";

const DataInput = ({ onDataEntered }: any) => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const isValid = (value: number) => value % 1000 === 0;

  const handleButtonClick = () => {
    if (isValid(inputValue)){
        onDataEntered(inputValue);
    }else {
        alert("Por favor, escolha um valor multiplo de 1000.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite um valor"
      />
      <button onClick={handleButtonClick}>Calcular</button>
    </div>
  );
};

export default DataInput;
