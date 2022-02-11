import axios from "axios";
import { useNavigate } from "react-router-dom";



function test() {

    const Navigate = useNavigate()  //if error error

    return(
        <button onSubmit={() => Navigate("/")}></button>
    );
}

export default test;