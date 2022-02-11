
function Employee_info() {

    const formInput = [["Shift Deuration", "text"],["Start Time", "text"], ["Salary","number"]];
    return (
        <div className="Personal_info">
            <div className="description-part">
                <h2>Personal Information</h2>
                <p>Enter all your personal data miust be a data here to know awdsad is good<br />and thawdsa is ad ada</p>
            </div>

            <div className="inputs-part">
                {formInput.map((value, key) => {
                    return( 
                    <div key={key}>
                        <div className="group">
                            <input placeholder=" " type={value[1]} required="required" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{value[0]}</label>
                        </div>
                    </div>)
                })}

            </div>
        </div>
    );
}

export default Employee_info;