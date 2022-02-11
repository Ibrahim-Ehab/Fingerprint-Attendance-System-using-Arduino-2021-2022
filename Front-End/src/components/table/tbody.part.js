import { useState } from "react/cjs/react.development";
import MalePhoto from '../img/Male.png';
import FemalePhoto from '../img/Female.png'
import { useNavigate } from "react-router-dom";

function Tbody({Data, Edit, isRemove}) {

    const Navigate = useNavigate()
    const [Expand, setExpand] = useState("")

    const HandleRemove = () => {
        
    }
    if (Data.length !== 0) {
        console.log(Data);
        return (
            <tbody>
                {Data.map((value) => {
                    return (
                        <tr key={value.id} id={value.id} className={Expand == value.id ? "t155" : ""} >
                            <td className='p-id' >
                                <span className="T3F1 T4P1">{value.id}</span><br/>
                                <div className="display-none T3F1">Start Time: {value.start_time}<br/>Shift Duration: {value.shift_duration}</div>
                            </td>
                            <td>
                            <span className="T3F1 T4P1">{value.name}</span><br/>

                                <div className="display-none T3F1">Salary: {value.salary}<br/> Attend: {value.attended_days}</div>
                            </td>

                            <td>
                            <span className="T3F1 T4P1">{value.email}</span><br/>
                                <div className="display-none T3F1">Phone Number: {value.phone}</div>
                            </td>

                            <td>
                                <span className="T3F1 T4P1"><img src={value.gender[0] ==="F" || value.gender[0] ==="f"? FemalePhoto: MalePhoto } /></span><br/>
                                <div className={Expand == value.id ? "display-none T4L1 T3F1 BG3L1" : "display-none T4L1 T3F1"}><label onClick={() => {Edit(value); Navigate("/form")} }>Edit</label>|<label onClick={() => window.confirm("Are You Sure You Want to Remove This User")? isRemove(value.id):""}>Remove</label></div>

                            </td>

                            <td>
                                <span className="T3F1 T4P1">{value.active === true ? <h5 className="status-label inbox T3F1">Active</h5> : <h5 className="status-label member">Waiting</h5>}</span><br/>
                                <span style={{visibility: "hidden"}}>Hello world </span>
                            </td>

                            <td id={value.id} onClick={(e) => Expand != e.target.id ? setExpand(e.target.id) : setExpand(-1)}>
                                <span className={Expand == value.id ? "fas fa-chevron-down" : "fas fa-chevron-up"} id={value.id} onClick={(e) => setExpand(e.target.id)}></span>
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        );
    }
    else { return (<tbody></tbody>); }
}

export default Tbody;