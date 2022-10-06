import React from "react";

function CustomInput(props){
    return (
        <input type="text" className="InputStyle" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    );
}

export default CustomInput;