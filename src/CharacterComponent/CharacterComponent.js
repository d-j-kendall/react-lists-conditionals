import React from 'react';

const cName = "CharacterComponent"
const style = {
        display: 'inline-block',
        whiteSpace: 'pre',
        minWidth: '10px',
        minHeight: '10px',
        border: '1px solid black',
        padding: '5px',
        margin: '5px'
};

const characterComponent = (props) => {

    return (
        <div style={style} onClick={props.clickListener}>
            {props.character}
        </div>
    )
};

export default characterComponent;