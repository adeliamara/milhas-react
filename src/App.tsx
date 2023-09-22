import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import DataInput from "./components/DataInput"
import Simulator from "./components/Simulator"

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [displayedValue, setDisplayedValue] = useState(200);

  const handleDataEntered = (data: number) => {
    setInputValue(data);
  };
  const handleCalculation = (result: number) => {
    setDisplayedValue(result);
  };

  return (
    <>
      <div>
        <Header />
        <DataInput onDataEntered={handleDataEntered} />
        <Simulator inputValue={inputValue} onCalculation={handleCalculation} />
        <p>Valor calculado: {displayedValue}</p>
      </div>
    </>
  )
}

export default App
