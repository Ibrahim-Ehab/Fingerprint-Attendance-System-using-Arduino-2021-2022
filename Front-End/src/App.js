import logo from './logo.svg';
import './components/css/main.css';

import { useEffect, useState } from 'react/cjs/react.development';


import Form from './components/form/form.index';
import NavBar from './components/main-component/navbar';
import Table from './components/table/table.index';
import Login_Page from './components/LoginPage/login.index';
import WaitingCard from './components/WaitingPage/Waiting_Card';
import Contact_Us from './components/form/ContactUs';
import UserData from './components/table/UserData';
import Show_id from './components/WaitingPage/Show.Input';
import LandingPage from './components/LandingPage/Landing.index';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem("Auth"));
  const [EditedData, setEditedData] = useState({})
  const [iSID, setisID] = useState(100000);
  console.log(isAuthenticated);
  useEffect( () => {
    if(isAuthenticated === "AdMin")
    localStorage.setItem('Auth', "AdMin")
    else if(isAuthenticated === "UsEr")
    localStorage.setItem('Auth', "UsEr")
    else
    localStorage.setItem('Auth', "NoNe")
  },[isAuthenticated]);

 
  return (
    <BrowserRouter>
      <div className="wrapper">
      {isAuthenticated === "AdMin" ? <NavBar tokenChanged = {setisAuthenticated}/> : <></>}
        <Routes>
          <Route path="/" element={isAuthenticated === "AdMin" ? <div className="main_content"><h1>You Are Not Allowed</h1></div>: <LandingPage />}/>
          <Route path="/login" element={isAuthenticated === "NoNe" ?<Login_Page tokenChanged = {setisAuthenticated}/> : isAuthenticated === "AdMin"? <div className="main_content"><h1>You Are Already Log</h1><br/><br/><button className='Main112'><NavLink to="/table" className='Main114'><i class="fas fa-arrow-left Maini"></i>Go to Management Table</NavLink></button></div> : <div className="main_content"><h1>You Are Already Log</h1><br/><br/><button className='Main112'><NavLink to="/UserData" className='Main114'><i class="fas fa-arrow-left Maini"></i>Go to User Data</NavLink></button></div>} />
          <Route path='/table' element={isAuthenticated === "AdMin" ? <><Table token = {localStorage.getItem("token")} isToken = {true} Edit={setEditedData}/></> : <div className="main_content"><h1>You Are Not Allowed</h1></div>}/>
          <Route path="/form" element ={isAuthenticated === "AdMin" ? <><Form  token = {localStorage.getItem("token")} isToken = {true} EditData={EditedData}/></> : <Form isToken = {false} setID={setisID}/>}/>
          <Route path="/waitingList" element ={isAuthenticated === "AdMin" ? <><WaitingCard token = {localStorage.getItem("token")} Edit={setEditedData}/></> : <div className="main_content"><h1>You Are Not Allowed</h1></div>} />
          <Route path="/ContactUS" element={isAuthenticated === "AdMin" ? <div className="main_content"><h1>You Are Not Allowed</h1></div>:<Contact_Us />} />
          <Route path="/UserData" element={isAuthenticated === "UsEr" ? <UserData token = {localStorage.getItem("token")} tokenChanged={setisAuthenticated}/> : <div className="main_content"><h1>You Are Not Allowed</h1></div>} />
          <Route path="/showID" element={<Show_id id={iSID}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  ); 
  

}

export default App;