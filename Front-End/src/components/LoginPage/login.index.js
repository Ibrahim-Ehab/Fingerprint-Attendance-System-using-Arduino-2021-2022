import '../css/loginPage.css';
import {onLoad} from './login.animation.js';

import WavePng from '../img/wave.png';
import FirmWare from '../img/undraw_firmware_re_fgdy.svg';
import UndrawProfile from '../img/undraw_profile_pic_ic-5-t.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';  
import { Navigate, useNavigate } from "react-router-dom"; 




function Login_Page(props) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Check, setcheck] = useState(false);
    const Navigat = useNavigate();
    useEffect(() => {
        onLoad();
    }, [])

    const Submithandler = (e) => {
        e.preventDefault();
        const data = {
            password: password
        };

        if(email && password) {
            if (Check) {
                axios.post('https://attendence123.herokuapp.com/admin/login', {username: email,...data})
                    .then((res) => {  localStorage.setItem('token', res.data.jwt); if(res.data.jwt){ Navigat("/table"); props.tokenChanged("AdMin");} else alert("Invalid Email or Password")})
                    .catch((err) => {console.log(err); alert("Invalid Email or Password")})
            }
            else {
                axios.post('https://attendence123.herokuapp.com/employee/login', {email: email,...data})
                    .then(async (res) => { await localStorage.setItem('token', res.data.jwt); if(res.data.jwt){ Navigat("/UserData"); props.tokenChanged("UsEr");} else alert("Invalid Email or Password")})
                    .catch((err) => {console.log(err); alert("Invalid Email or Password")})
            }
        }
        else
        {alert("Please insert Email and Password")}
    }

    return (
        <>
            <img className="wave" src={WavePng} />
            <div className="container">
                <div className="img">
                    <img src={FirmWare} />
                </div>
                <div className="login-content">
                    <form action="#" onSubmit={Submithandler}>
                        <img src={UndrawProfile} />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input" onChange={e => setemail(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" onChange={e => setpassword(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" id="Admin" value="Admin" onChange={e => setcheck(e.target.checked)} />
                            <label>Admin</label>
                        </div>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
            <script type="text/javascript" src="js/main.js"></script>
        </>
    );
}

export default Login_Page;