import './App.css';
import { useState } from 'react';
import Step from './Step';

function App() {
  const [step,setStep]=useState(1)
  const [formData,setFormData]=useState(
    {
      firstName:"",
      lastName:"",
      model:"",
      price:"",
      cardInfo:"",
      expiryDate:""
    }
  )

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="App">
      <Step  step={step} setStep={setStep} formData={formData} handleChange={handleChange}
       />
    </div>
  );
}

export default App;
