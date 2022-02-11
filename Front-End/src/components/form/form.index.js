// import '../css/main.css';
// import '../css/coponent-input.css';
// import '../css/formPage.css';
import '../css/coponent-input.css';
import '../css/addation.css';
import Waiting_illustration from '../img/form_illustration.png';
import WavePng from '../img/wave.png';


import Form_Input from './Form_Input';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';


function Form({ token, isToken, EditData, setID }) {

    const Navigate = useNavigate();
    const style = {
        backgroundImage: `url(${Waiting_illustration})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'end',
        backgroundPosition: "right bottom",
        backgroundSize: "100%",

    }

    const [SubmitData, setSubmitData] = useState({
        password: "",
        name: "",
        gender: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (isToken)
            setSubmitData({active:true, name: EditData.name, email: EditData.email, gender: EditData.gender,  phone: EditData.phone, shift_duration: "", start_time: "", salary: "" })
    }, [])

    console.log(SubmitData);
    const OnclickEnventHandler = (e) => {
        e.preventDefault();

        if (isToken)
            axios({
                method: 'patch',
                url: `https://attendence123.herokuapp.com/employee/${EditData.id}`,
                data: SubmitData,
                headers  : {authorization: token}
            })
                .then(res => { console.log(res.id); Navigate("/table")})
                .catch(err => { console.log(err); alert("Invalid Input Data Please Stick To The Rule!")})

        else
        if (SubmitData)
            axios({
                method: 'post',
                url: "https://attendence123.herokuapp.com/employee",
                data: SubmitData
            })
                .then(res => { setID(res.data); Navigate("/showID")})
                .catch(err => { console.log(err);alert("Invalid Input Data Please Stick To The Rule!") })
    }

    if (isToken) {
        console.log(SubmitData);
        return (
            <div className="main_content main_content_form">
                {/* Form Wrappe */}
                <div className="header">Welcome!! Have a nice day.</div>
                {/* <img className='Illus-imge' src={Waiting_illustration} /> */}
                <form className='Form-Data' onSubmit={OnclickEnventHandler}>
                    {/* flex direction col */}
                    <div className='main-div'>
                        {/* flex direct row */}
                        <div>
                            <Form_Input Label={"Security Info"} Input_data={[["ID", "number", EditData.id, "id"], ["Password", "password", EditData.password ? EditData.password.slice(0, 9) : "", "password"]]} Description={"you can't edit this part!"}/>
                            <Form_Input Label={"Personal Info"} Input_data={[["Name", "text", SubmitData.name, "name"], ["Gender", "text", SubmitData.gender, "gender"]]} SubmitData={SubmitData} EditSubmit={setSubmitData} Description={"you can edit this part"}/>
                            <Form_Input Label={"Contact Info"} Input_data={[["Email", "email", SubmitData.email, "email"], ["Phone", "number", SubmitData.phone, "phone"]]} SubmitData={SubmitData} EditSubmit={setSubmitData} Description={"you can edit this part, but be carefull don't edit it recklessly"}/>
                        </div>
                        <div className='employee-part' style={style}>
                            <Form_Input Label={"Employee Info"} Input_data={[["Shift Duration", "number", SubmitData.shift_duration, "shift_duration"], ["Start Time", "text", SubmitData.start_time, "start_time"], ["Salary", "number", SubmitData.salary, "salary"]]} SubmitData={SubmitData} EditSubmit={setSubmitData} Description={"Note you must write Start Time as the following format  hh::mm::ss"}/>
                        </div>
                    </div>

                    <div className='Form-Submit' >
                        <button type='submit' className='Form-btn' >Submit</button>
                    </div>

                </form>
            </div>
        );
    }
    else {

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
                                <Form_Input Label={"Personal Info"} Input_data={[["Name", "text", SubmitData.name, "name"], ["Phone", "number", SubmitData.phone, "phone"], ["Gender", "text", SubmitData.gender, "gender"]]} SubmitData={SubmitData} EditSubmit={setSubmitData} />
                                <Form_Input Label={"Security Info"} Input_data={[["Email", "email", SubmitData.email, "email"], ["Password", "password", SubmitData.password, "password"]]} SubmitData={SubmitData} EditSubmit={setSubmitData} />
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
}


export default Form;


            // {/* Form Wrappe */}
            //     {/* <div className="header">Welcome!! Have a nice day.</div> */}
            //     {/* <img className='Illus-imge' src={Waiting_illustration} /> */}
            //     <form className='Form-Data' onSubmit={OnclickEnventHandler} >
            //         <NewUser_Part Submit={setSubmitData} Data={SubmitData} Image={Waiting_illustration} />
            //         <div>
            //             {/* <button type='submit' className='Form-btn'>Submit</button> */}
            //         </div>