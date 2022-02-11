import { NavLink } from 'react-router-dom';
import '../css/LandingPage.css';

import OurStory from './ourStory';
import VideoPlay from './Guide.video';
import Team from './Team';
import PopUpWindow from './Popup';
import { useState } from 'react/cjs/react.development';
function LandingPage() {

    const [isOpen,setisOpen] = useState(false)
    return (
        <div className="Landing-Page">
            <nav className='fixed-nav navbar'>
                <div className='nav-Container'>
                    <div className='nav-icon'>
                     
                    </div>
                    <div className='nav-il'>
                        <ul>
                            <li><NavLink to='/login'>Log in</NavLink></li>
                            <li><NavLink to='/form'>Register</NavLink></li>
                            <li><NavLink to='/ContactUS'>Contact US</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='Landing-page-data'>
                <OurStory />
                <VideoPlay setOpen={setisOpen}/>
                {isOpen && <PopUpWindow setOpen={setisOpen}/>}
            </div>

        </div>
    )
}

export default LandingPage;