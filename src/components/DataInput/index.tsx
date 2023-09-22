import { useState } from "react";
import './index.css'

const DataInput = ({ onDataEntered }: any) => {
    console.log('DataInput')
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const isValid = (value: number) => value % 1000 === 0;

  const handleButtonClick = () => {
    if (isValid(inputValue)){
        onDataEntered(inputValue);
    } else {
        alert("Por favor, escolha um valor múltiplo de 1000.");
    }
  };

  return (
    <div className="data-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite um valor múltiplo de 1000"
      />
      <button onClick={handleButtonClick}>Calcular</button>
    </div>
  );
};

export default DataInput;
