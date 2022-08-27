import './../../App.css'
import React, { useState } from 'react'

const HealthRecord = () =>{
    const initialValues = {
        height: "",
        weight: "",
        bloodType: "",
        medicalHistory1: "",
        medicalHistory2: "",
        medicalHistory3: "",
        medicalHistory4: "",
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (event) =>{
        
        const { name, value } = event.target;

        setValues({
            ...values, 
            [name]: value,
        });   
    };

    const handleSubmit = event =>{
        event.preventDefault();
        alert('You have submitted the form.');
        console.log(values);
    }

    return(
            <>
            <div className='healthRecordPage'>
            <div className='healthRecordPageContent'>
                <h1>Health Record</h1>
                <p>This section is about your previous medical information like previous medical history. 
                    <br></br>Filling this up can better help our medical workers track diagnose for you. 
                    <br></br>However, it is not compulsory for you to fill this up.</p>
            </div>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h1>Section A: Basics Medical Information</h1>
                        <label>
                            Height 
                            <br></br>
                            <input 
                                style={{width: '25%'}} 
                                type='text' 
                                name='height'
                                value={values.height} 
                                onChange={handleInputChange}
                            /> cm
                        </label>
                        <br></br>
                        <label>
                            Weight
                            <br></br> 
                            <input
                                style={{width: '25%'}} 
                                type='text' 
                                name='weight' 
                                value={values.weight} 
                                onChange={handleInputChange}
                            /> kg
                        </label>
                        <br></br>
                        <label>
                            Blood type
                            <br></br>
                            <select name='bloodType' value={values.bloodType} onChange={handleInputChange}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="O">O</option>
                                <option value="AB">AB</option> 
                            </select> 
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>Section B: Medical History</h1>
                        <label>
                            Have you been diagnosed COVID-19 positive in the past 6 months? 
                            <br></br>
                            <div onChange={handleInputChange}>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}} 
                                    type='radio' 
                                    name='medicalHistory1' 
                                    value="Yes"
                                /> Yes
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory1' 
                                    value="No"
                                /> No
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory1' 
                                    value="Not Sure"
                                /> Not Sure
                            </div>
                        </label>
                        <br></br>
                        <label>
                            Do you smoke frequently? (More than twice per week)
                            <br></br> 
                            <div onChange={handleInputChange}>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}} 
                                    type='radio' 
                                    name='medicalHistory2' 
                                    value="Yes"
                                /> Yes
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory2' 
                                    value="No"
                                /> No
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory2' 
                                    value="Not Sure"
                                /> Not Sure
                            </div>
                        </label>
                        <br></br>
                        <label>
                            Do you drink alcohol frequently? (More than 100ml per week)
                            <br></br> 
                            <div onChange={handleInputChange}>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}} 
                                    type='radio' 
                                    name='medicalHistory3' 
                                    value="Yes"
                                /> Yes
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory3' 
                                    value="No"
                                /> No
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory3' 
                                    value="Not Sure"
                                /> Not Sure
                            </div>
                        </label>
                        <br></br>
                        <label>
                            Have you participated in any blood donation campaign for the past 2 months?
                            <br></br> 
                            <div onChange={handleInputChange}>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}} 
                                    type='radio' 
                                    name='medicalHistory4' 
                                    value="Yes"
                                /> Yes
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory4' 
                                    value="No"
                                /> No
                                <br></br>
                                <input 
                                    style={{width: '3%', verticalAlign: 'middle'}}
                                    type='radio' 
                                    name='medicalHistory4' 
                                    value="Not Sure"
                                /> Not Sure
                            </div>
                        </label>
                        <br></br>
                        <button type="submit">Save Changes</button>
                    </fieldset>
                </form>
            </div>
            </div>
            </>

    );
}

export default HealthRecord;