import FingerPrint from '../img/Fingerprint.png'
import Interactive from '../img/Interactive.png'
import OnlineService from '../img/onlineSystem.png'
import Medical from '../img/Medical.png'
import Portable from '../img/Portability.png'

function ourStory() {

    return (
        <div className="D1 services-container" id="offer">
            
            <div className="services">
                {/* <span><h1>Our Story</h1><br/> <p>We Suffer to much to make this project. We Learn to much from it so if any project like this is requested , we can make it in a week</p></span> */}
                <h1>What we offer</h1>
                <div className='Data-container'>
                    <div className='online-service'>
                        <img src={OnlineService} style={{ width: "78px", height: "78px" }} />
                        <h2>Online Service</h2>
                        <p>We offer integrated online Service to manage FingerPrint System</p>
                    </div>
                    <div className='FingerPrint'>
                        <img src={FingerPrint} style={{ width: "78px", height: "78px" }} />
                        <h2>FingerPrint</h2>
                        <p>We make FingerPrint Systems very reliable</p>
                    </div>
                    <div className='interacive'>
                        <img src={Interactive} style={{ width: "78px", height: "78px" }} />
                        <h2>Interactive</h2>
                        <p>We make Interactive System with the User</p>
                    </div>
                    <div className='interacive'>
                        <img src={Medical} style={{ width: "78px", height: "78px" }} />
                        <h2>Safety</h2>
                        <p>We consider your safety</p>
                    </div>
                    <div className='interacive'>
                        <img src={Portable} style={{ width: "78px", height: "78px" }} />
                        <h2>Portability</h2>
                        <p>Don't Stick in one place with our 3G/4G connection</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourStory;