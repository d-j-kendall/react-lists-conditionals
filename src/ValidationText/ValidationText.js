import React from 'react';
import CharacterComponent from "../CharacterComponent/CharacterComponent";


const validationText = (props) => {

    let properLengthText = null;
    const {value, length} = props;
    if(length < 5){
        properLengthText = <p>Your text is too short !!!</p>
    }else if (length > 20){
        properLengthText = <p>Your text is too long !!!</p>
    }

    const characterClickListener = (index) => {
        const newVal = value.slice(0, index)+value.slice(index+1, value.length);

        props.clickListener(newVal);
    }

    const charComponents = value.split("").map( (c, i) => <CharacterComponent character={c} clickListener={() => characterClickListener(i)}/> )



    return(
        <div>
            {properLengthText}
            <p><b>Your input is :</b></p>
            {charComponents}
        </div>
    )
}


export default validationText;