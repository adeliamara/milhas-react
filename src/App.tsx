import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import DataInput from './components/DataInput';
import Simulator from './components/Simulator';
import InfoSubscriber from './components/InfoSubscriber';
import SubscriberInput from './components/SubscriberInput';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [isSubscriber, setIsSubscriber] = useState(false); // Novo estado para controlar a assinatura

  const handleDataEntered = (data: number) => {
    setInputValue(data);
  };

  const handleSubscriberEntered = (subscriber: boolean) => {
    setIsSubscriber(subscriber); 
  };

  return (
    <div className="App">
      <Header />
      <DataInput onDataEntered={handleDataEntered} />
      <SubscriberInput onDataEntered={handleSubscriberEntered} />
      <Simulator inputValue={inputValue} isSubscriber={isSubscriber} /> 
      <InfoSubscriber isSubscriber={isSubscriber} />

    </div>
  );
}

export default App;
