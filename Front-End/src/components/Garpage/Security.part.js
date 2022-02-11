


function Security_part() {
    return (
        <div className="Security_part">
            <div className="description-part">
                <h2>Security Code</h2>
                <p>Enter all your personal data miust be a data here to know awdsad is good<br />and thawdsa is ad ada</p>
            </div>
            <div className="inputs-part">
                <div className="group">
                    <input placeholder=" " type="text" required="required" disabled/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>ID</label>
                </div>
                <div className="group">
                    <input placeholder=" " type="text" required="required" disabled/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div>
            </div>    
        </div>
    );
}

export default Security_part;