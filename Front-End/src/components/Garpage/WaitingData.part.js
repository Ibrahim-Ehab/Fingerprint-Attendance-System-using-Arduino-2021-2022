
function NewUser_Part(props) {

    return (
        <div className="WD-C1" >
            <div>
                <div className="description-part">
                    <h2>Personal Information</h2>
                    <p>Enter all your personal data miust be a data here to know awdsad is good<br />and thawdsa is ad ada</p>
                </div>
                <div className="inputs-part">
                    <div>
                        <div className="group">
                            <input onChange={e => { props.Submit({ ...props.Data, name: e.target.value }) }} placeholder=" " type="text" required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>User Name</label>
                        </div>
                    </div>

                    <div>
                        <div className="group">
                            <input onChange={e => { props.Submit({ ...props.Data, phone: e.target.value }) }} placeholder=" " type="number" required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Phone</label>
                        </div>
                    </div>
                    <div>
                        <div className="group">
                            <input onChange={e => { props.Submit({ ...props.Data, gender: e.target.value }) }} placeholder=" " type="text" required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Gender</label>
                        </div>

                    </div>

                </div>
            </div>
            <div >
                <div className="description-part">
                    <h2>Security Information</h2>
                    <p>Enter all your personal data miust be a data here to know awdsad is good<br />and thawdsa is ad ada</p>
                </div>
                <div className="inputs-part">
                    <div>
                        <div className="group">
                            <input onChange={e => { props.Submit({ ...props.Data, email: e.target.value }) }} placeholder=" " type="email" required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                    </div>
                    <div>
                        <div className="group">
                            <input onChange={e => { props.Submit({ ...props.Data, password: e.target.value }) }} placeholder=" " type="password" required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default NewUser_Part;