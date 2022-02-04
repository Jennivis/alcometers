import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState(0);

function calculate(e) {
  e.preventDefault();
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - (burning * time)
  let bloodAlcoholLevel = 0;

  if (gender === "male") {
    bloodAlcoholLevel = gramsLeft / (weight * 0.7)
  } else {
    bloodAlcoholLevel = gramsLeft / (weight * 0.6)
  }
  
  if (bloodAlcoholLevel < 0) {
    bloodAlcoholLevel = 0;
  }

  setResult(bloodAlcoholLevel);
}

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/><span> kg</span>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select><span> h</span>
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>Male</label>
        <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>Female</label>
      </div>
      <button>Calculate</button>
      <div>
        <h4>Alcohol blood level:</h4>
        <output>{result.toFixed(1)} <span> ‰</span></output>
      </div>
    </form>
  );
}

export default App;
