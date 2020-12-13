import React from 'react';


const userInput = (props) => {
    const {value, changeListener} = props;
    return (
        <input type="text" value={value} onChange={changeListener}/>
    )
}

export default userInput;