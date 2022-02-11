import '../css/coponent-input.css';
import '../css/addation.css';

import Waiting_illustration from '../img/form_illustration.png';
import WavePng from '../img/wave.png';
import axios from 'axios';
import Form_Input from './Form_Input';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

function Contact_Us(props) {

    const [SubmitData, setSubmitData] = useState({});
    const Input_data = [["Name", "text"], ["Email", "email"]];

    const Navigate = useNavigate()
    const OnclickEnventHandler = (e) => {
        e.preventDefault();

        if (SubmitData)
           {Navigate("/")}
    }

    return (
        <>
            <img className="wave" src={WavePng} />

            <div className="Register-form">

                <form className='Form-Data' onSubmit={OnclickEnventHandler}>
                    {/* flex direction col */}
                    <div className='main-div'>
                        {/* flex direct row */}
                        <div className='img-container'>
                            <div className="img">
                                <img src={Waiting_illustration} />
                            </div>
                        </div>
                        <div className='employee-part py-2' >
                            <div className="Form_Container">
                                <div className="label_conatiner">
                                    <h2>Contact Us</h2>
                                    <p>This Part is concerned with data input</p>
                                </div>
                                <div className="Input_container">
                                    {Input_data.map((value, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="group">
                                                    <input placeholder=" " type={value[1]} required="required" />
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>{value[0]}</label>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='Text-Form'>
                                    <div className="group" >
                                        <textarea placeholder=" " required="required" style={{ height: "100px", width:"100%", marginTop:"1rem" }} />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Form</label>
                                    </div>
                                </div>

                            </div>
                            <div className='Form-Submit' >
                                <button type='submit' className='Form-btn' >Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}




export default Contact_Us;