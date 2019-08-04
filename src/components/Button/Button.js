import React from 'react';

import "./Button.css";

import {Button} from 'reactstrap';

const button = (props) => {

    return (
        <div>

            <Button id="buttcheek" color="primary" onClick={props.onClick}>{props.text}</Button>

        </div>
    );

}

export default button;