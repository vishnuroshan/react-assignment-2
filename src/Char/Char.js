import React from 'react';
import './Char.css'
const Char = (props) => <h3 className="char" onClick={props.delete}>{props.character}</h3>

export default Char;