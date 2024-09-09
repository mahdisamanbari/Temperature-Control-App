import React,{useState} from 'react';

const App = () => {
  const [temperatureValue,setTemperatureValue] = useState(10);
  const [temperatureColor,settemperatureColor] = useState('cold');

  const addTemp=() => {
    const newTemperature=temperatureValue + 1
    if (newTemperature ===30) return;
    if (newTemperature >= 15){
      settemperatureColor('hot')
    }
    setTemperatureValue(newTemperature)
  };
  const removeTemp=() => {
    const newTemperature=temperatureValue - 1
    if (newTemperature ===0) return;
    if (newTemperature < 15){
      settemperatureColor('cold')
    }
    setTemperatureValue(newTemperature)
  };
  
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}ºc</div>
      </div>
      <div className='button-container'>
        <button onClick={()=>addTemp()}>+</button>
        <button onClick={()=>removeTemp()}>-</button>
      </div>
      
    </div>
  );
};

export default App;