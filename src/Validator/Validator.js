import React from 'react';

const Validator = (props) => {
    let char;
    if (props.characters) {
        if (props.characters.length > 10)
            char = <h3>too long</h3>
        else if (props.characters.length < 5)
            char = <h3>too small</h3>
    } else char = null;

    return <div>{char}</div>
};

export default Validator;