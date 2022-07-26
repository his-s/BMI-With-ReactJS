import "./components/Form.css"
import "./App.css"
import { useState } from "react"
const Form = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmiValue, setBMIValue] = useState(0)
  const bmi = () => {
    setBMIValue(weight / (height * height))
  }
  const onSubmit = (event) => {
    event.preventDefault()
    bmi()
  }
  return (
    <>
      <div className="form">
        <form>
          <div className="weight">
            <label for="weight" >Weight (Kg) </label>
            <input id="weight" type="text" onInput={(e) => setWeight(e.target.value)}></input>
          </div>
          <div className="height">
            <label for="height">Height (Me) </label>
            <input id="height" type="text" onInput={(e) => setHeight(e.target.value)}></input>
          </div>
          <div className="button">
            <button onClick={onSubmit}>
              Calculate
            </button>
            <button type="reset">
              Reset
            </button>
          </div>
        </form >



      </div >
      <div className="data">
        <p> your height is {height}</p>
        <p>your weight is {weight}</p>
        <p>your bmi is {bmiValue.toFixed(2)}</p>
      </div>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <Form></Form>
    </div>

  );
}

export default App;
