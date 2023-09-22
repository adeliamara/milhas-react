import React, { useState, useEffect } from "react";

interface SimulatorProps {
  inputValue: number;
  isSubscriber: boolean;
}

const Simulator: React.FC<SimulatorProps> = ({ inputValue, isSubscriber }) => {
  const [valorPorMilha, setValorPorMilha] = useState<number>(0);
  const [totalMilhasAdquiridas, setTotalMilhasAdquiridas] = useState<number>(0);
  const [totalASerPago, setTotalASerPago] = useState(0);

  useEffect(() => {
    let desconto: number = 0.4;
    let bonus: number = 2;

    if (isSubscriber) {
      desconto += 0.05;
      bonus += 0.3;
    }

    if (!isNaN(inputValue)) {
      const milheiros = inputValue / 1000;
      const precoMilheiroEfetivo = 70;
      const totalMilhasComBonus: number = milheiros * (1 + bonus);
      const valorTotalAPagar: number = milheiros * precoMilheiroEfetivo * (1 - desconto);

      const valorMilheiro = totalMilhasComBonus !== 0 ? (valorTotalAPagar / totalMilhasComBonus) : 0;

      setValorPorMilha(valorMilheiro);
      setTotalMilhasAdquiridas(totalMilhasComBonus);
      setTotalASerPago(valorTotalAPagar);
    } else {
      setValorPorMilha(0);
      setTotalMilhasAdquiridas(0);
      setTotalASerPago(0);
    }
  }, [inputValue, isSubscriber]);

  return (
    <div>
      <h2>Simulator</h2>

        <div>
          <h3>Valor por milheiro:</h3>
          <p>{valorPorMilha.toFixed(2)}</p>
        </div>
    
        <div>
          <h3>Total de milhas adquiridas:</h3>
          <p>{(totalMilhasAdquiridas * 1000).toFixed(2)}</p>
        </div>

        <div>
          <h3>Total a ser pago:</h3>
          <p>{totalASerPago.toFixed(2)}</p>
        </div>

    </div>
  );
};

export default Simulator;
