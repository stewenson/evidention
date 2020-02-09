import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const ButtonComponent = (props) => {
    return (
        <div className="buttonComponent">
            <Button
                onClick={props.clicked}
                className={props.cName}
                variant={props.variant}
            >
                {props.text}
            </Button>
        </div>
    );
};

export default ButtonComponent;