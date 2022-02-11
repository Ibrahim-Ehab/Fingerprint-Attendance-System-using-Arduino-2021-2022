import Baher from '../img/Baher.jpg'

function Team() {

    return (
        <div className="D1 Team-Cointainer" id="team">
            <div className='Team-card'>
                <img src={Baher} style={{ width: "64px", height: "64px" }}/>
                <h2>Baher Adel</h2>
                <h3>Front End</h3>
            </div>
            <div className='Team-card'>
                <img src ={Baher} style={{ width: "64px", height: "64px" }}/>
                <h2>Ibrahim Al Bana</h2>
                <h3>Front End</h3>
            </div>
        </div>
    )
}

export default Team;