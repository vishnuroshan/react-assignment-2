import React from 'react';
import Char from '../Char/Char';
const Validator = (props) => {
    let char;



    if (props.characters) {
        if (props.characters.length > 10)
            char = <h3>too long</h3>

        else if (props.characters.length < 5)
            char = <h3>too small</h3>
        else char = <div>
            <h3>{props.characters}</h3>
            {props.characters.split('').map((char, index) => {
                return <Char delete={() => props.delete(index)} character={char} />
            })}
        </div>
    }

    return <div>

        {char}

    </div>
};

export default Validator;