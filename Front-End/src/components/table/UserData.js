import '../css/coponent-input.css';
import '../css/addation.css';

import WavePng from '../img/wave.png';
import Waiting_illustration from '../img/UserData.png';

import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
function UserData({ token,tokenChanged }) {

   const [UserData, setUserData] = useState({});
   const Navigate = useNavigate()

   useEffect(() => {
      if (token)
         axios.get("https://attendence123.herokuapp.com/employee?order_by=id&desc=false", { headers: { authorization: token } })
            .then(res => { setUserData(res.data); })
            .catch(err => { console.log(err); })
   }, [token])
   
   return (
      <>
         <img className="wave" src={WavePng} />

         <div className="Register-form">

            <form className='Form-Data'onSubmit={()=> {tokenChanged("NoNe"); Navigate("/")}} >
               {/* flex direction col */}
               <div className='main-div'>
                  {/* flex direct row */}
                  <div className='img-container'>
                     <div className="img">
                        <img src={Waiting_illustration} style={{}} />
                     </div>
                  </div>
                  <div className='employee-part py-2' >
                     <div className="Form_Container">
                        <div className="label_conatiner">
                           <h2>{`${UserData.name}'s Data`}</h2>
                           <p>Here IS, All Your Data</p>
                        </div>
                        <div className="Input_container">

                           {/* Input Group */}
                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.name} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>name</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.gender} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Gender</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.email} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Email</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.phone} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Phone</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.attended_days} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Attended Days</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.attended_late} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Attended Late</label>
                              </div>
                           </div>
                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.active ? "Active" : "Waiting"} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Active</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.salary} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Salary</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.shift_duration} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Shift Duration</label>
                              </div>
                           </div>

                           <div >
                              <div className="group">
                                 <input placeholder=" " type="text" required="required" value={UserData.start_time} />
                                 <span className="highlight"></span>
                                 <span className="bar"></span>
                                 <label>Start Time</label>
                              </div>
                           </div>

                        </div>

                     </div>
                     <div className='Form-Submit' >
                        <button type='submit' className='Form-btn' >Log Out</button>
                     </div>
                  </div>
               </div>

            </form>
         </div>
      </>
   );
}

export default UserData;


