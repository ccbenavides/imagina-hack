import React from 'react';

function Row(props){

    return <li id={props.data.respuesta} onClick={props.onClick}>
       {props.data.cola}. { props.data.name }
    </li>;
}

export default Row;