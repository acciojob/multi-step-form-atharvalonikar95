import React from 'react'

const Step = ({step,setStep ,formData,handleChange}) => {
  return (
    <div>
      {
        step===1 && <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"flex-start",gap:4,padding:10}}>
          <label htmlFor='firstName'>First Name</label>
          <input id="first_name" name='firstName' value={formData.firstName} onChange={handleChange}></input>
          <label htmlFor='LastName'>Last Name</label>
          <input id="last_name" name='lastName'  value={formData.lastName}  onChange={handleChange}></input>
          <button onClick={()=>setStep(prev=>prev+1)}>Next</button>
        </div>

      }
      {
        step===2 && <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"flex-start",gap:4,padding:10}}>
          <label htmlFor='model'>Model Name :</label>
          <input id="model" name='model' value={formData.model} onChange={handleChange}></input>
          <label htmlFor='car_price'>Car Price :</label>
          <input id="car_price" name='price'  value={formData.price}  onChange={handleChange}></input>
          <div>
          <button onClick={()=>setStep(prev=>prev-1)}>previous</button>
          <button onClick={()=>setStep(prev=>prev+1)}>Next</button>
          </div>
        </div>
      }
      {
        step===3 && <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"flex-start",gap:4,padding:10}}>
          <label htmlFor='cardInfo'>Card Number:</label>
          <input id="card_info" name='cardInfo' value={formData.cardInfo} onChange={handleChange}></input>
          <label htmlFor='expiryDate'>Expiry Date :</label>
          <input id="expiry_date" name='expiryDate'  value={formData.expiryDate}  onChange={handleChange}></input>
          <div>
          <button onClick={()=>setStep(prev=>prev-1)}>previous</button>
          <button onClick={()=>{console.log(formData)}}>Submit</button>
          </div>
        </div>

      }
    </div>
  )
}

export default Step
