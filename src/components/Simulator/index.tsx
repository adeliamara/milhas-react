import React, { useState, useEffect } from "react";

interface SimulatorProps {
  inputValue: number;
  onCalculation: (result: number) => void;
}

const Simulator: React.FC<SimulatorProps> = ({ inputValue, onCalculation }) => {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (!isNaN(inputValue)) {
      const milheiros = inputValue/1000;
      const precoMilheiroEfetivo = 70; 
      const desconto = 0.4
      const bonus = 2
      const calculoResultado = milheiros * precoMilheiroEfetivo * (1 - desconto) / (1 + bonus) 

      setResult(calculoResultado);
      onCalculation(calculoResultado);
    } else {
      setResult(null);
      onCalculation(0);
    }
  }, [inputValue, onCalculation]); 

  return (
    <div>
      <h2>Simulator</h2>
      {result !== null && (
        <div>
          <h3>Calculation Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Simulator;





