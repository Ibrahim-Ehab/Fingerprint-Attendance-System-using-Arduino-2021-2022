

function Form_Input({ Label, Description, Input_data,SubmitData,EditSubmit }) {

    return (
        <div className="Form_Container">
            <div className="label_conatiner">
                <h2>{Label}</h2>
                <p>{Description}</p>
            </div>
            <div className="Input_container">

                    {Input_data.map((value, key) => {
                        return (
                            <div key={key}>
                                <div className="group">
                                    <input name={value[3]} placeholder=" " type={value[1]} required="required" value={value[2]} onChange={({target: {name,value}}) => EditSubmit({...SubmitData, [name]: value })}/>               
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>{value[0]}</label>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Form_Input;


