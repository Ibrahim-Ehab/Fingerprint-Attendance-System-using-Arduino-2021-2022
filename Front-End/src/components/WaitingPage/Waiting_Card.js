import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import '../css/Waiting_card.css';

function WaitingCard({ Edit, token }) {

    const [UnActive, setUnActive] = useState([]);
    useEffect(() => {
        axios.get("https://attendence123.herokuapp.com/employee?active=0", { headers: { authorization: token } })
            .then(res => { setUnActive(res.data); })
            .catch(err => { console.log(err); })
    }, [token])
    return (

        <div class="main_content">
            <div class="WaitingCard-class">
                
                {UnActive.length !== 0 ? UnActive.map((value, key) => {
                    return (
                        <div key={key} class="cards">
                            <div class={`card card-${key%3}`}>
                                <div class="card__icon"><i class="far fa-user-circle"></i></div>
                                <h2 class="card__title">Name: {value.name}<br/><br/>Email: {value.email}<br/><br/>Phone: {value.phone}</h2>
                                <p class="card__apply">
                                    <Link class="card__link" onClick={() => Edit(value)} to="/form">Apply Now <i class="fas fa-arrow-right"></i></Link>
                                </p>
                            </div>
                        </div>
                    )
                }): <h1>There Is No Data Here</h1>}

            </div>
        </div>
    );
}

export default WaitingCard;