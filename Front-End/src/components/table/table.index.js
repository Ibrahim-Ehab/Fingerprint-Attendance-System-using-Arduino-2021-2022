import '../css/main.css';
import '../css/table.css';

import Thead from "./thead.part";
import Tbody from "./tbody.part";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Table({ token, Edit }) {

    const [UserData, setUserData] = useState([])
    const [PageNumber, setPageNumber] = useState(0)
    const [SortBy, setSortdby] = useState([]);
    const [DumCounter, setDumCounter] = useState(-1);
    const [isRemove, setisRemove] = useState(-1);

    let style = ["T122", "T121"];
    console.log(DumCounter);
    useEffect(() => {
        if (token && DumCounter == -1)
            axios.get("https://attendence123.herokuapp.com/employee?order_by=id&desc=false", { headers: { authorization: token } })
                .then(res => { setUserData(res.data); })
                .catch(err => { console.log(err); })
    }, [token, DumCounter, isRemove])

    const handleMember = (e) => {
        if (token) {
            axios.get(`https://attendence123.herokuapp.com/employee?order_by=id&desc=false&active=${e.target.id}`, { headers: { authorization: token } })
                .then(res => { setUserData(res.data); })
                .catch(err => { console.log(err); })
        }
        else
            alert("Not Allowed");
    }

    useEffect(() => {
        if (token && SortBy.length !== 0)
            axios.get(`https://attendence123.herokuapp.com/employee?order_by=${SortBy[0]}${SortBy[1] === "asc" ? "&desc=false" : ""}`, { headers: { authorization: token } })
                .then(res => { setUserData(res.data); })
                .catch(err => { console.log(err); })
    }, [SortBy])

    useEffect(() => {
        if (token && isRemove > 0) {
            axios.delete(`https://attendence123.herokuapp.com/employee/${isRemove}`, { headers: { authorization: token } })
            .then(res => { console.log(res.data); })
            .catch(err => { console.log(err); })
            axios.get("https://attendence123.herokuapp.com/employee?order_by=id&desc=false", { headers: { authorization: token } })
                .then(res => { setUserData(res.data); })
                .catch(err => { console.log(err); })
        }
    }, [isRemove])
    return (
        <div className="main_content">

            <div>
                <div className="d1214">
                    <h2 className="table-header">Mangement Table</h2>
                    <div className='T113'>
                        <div className={DumCounter > -1 ? "T114 " + style[DumCounter] : "T114"}>
                            <button id="1" onClick={(e) => { DumCounter != e.target.id ? setDumCounter(1) : setDumCounter(-1); handleMember(e) }}>Member</button>
                            <button id="0" onClick={(e) => { DumCounter != e.target.id ? setDumCounter(0) : setDumCounter(-1); handleMember(e) }}>Waiting</button>
                        </div>
                        <div className='T112'>
                            <div>
                                <button onClick={() => { if (PageNumber > 0) setPageNumber(PageNumber - 1) }} className='Paggination-Button'> <i class="fas fa-chevron-left"></i></button>
                                <label><span> {PageNumber + 1} </span></label>
                            </div>
                            <div >
                                <label><span>&nbsp;of&nbsp;{Math.floor((UserData.length + 1) / 7 + (UserData.length + 1) % 7 !== 0 ? 1 : 0)} </span></label>
                                <button onClick={() => { if (PageNumber < (UserData.length / 7 - 1)) setPageNumber(PageNumber + 1) }} className='Paggination-Button'><i class="fas fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table Content */}
                <table className='Emp-table'>
                    <Thead setSort={setSortdby} Sort={SortBy} />
                    <Tbody Data={UserData.slice(0 + 7 * PageNumber, 7 + 7 * PageNumber)} Edit={Edit} isRemove={setisRemove} />
                </table>
            </div>
        </div>
    );

}

export default Table;