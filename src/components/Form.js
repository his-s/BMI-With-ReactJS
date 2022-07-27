import "./Form.css"
import { useState } from "react"
const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiValue, setBMIValue] = useState(0);
    const bmi = () => {
        setBMIValue(weight / (height * height));
    }
    const onSubmit = (event) => {
        event.preventDefault();
        bmi();
    }
    return (
        <>
            <div className="form">
                <form>
                    <div className="weight">

                        <input id="weight" placeholder="Enter Your Weight In (Kg)" type="text" onInput={(e) => setWeight(e.target.value)}></input>
                    </div>
                    <div className="height">

                        <input id="height" placeholder="Enter Your Height In (M)" type="text" onInput={(e) => setHeight(e.target.value)}></input>
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
                <p>Height is {height} (M)</p>
                <p>Weight is {weight} (Kg)</p>
                <p>BMI is {bmiValue.toFixed(2)}</p>
            </div>
        </>
    )
}
export default Form;