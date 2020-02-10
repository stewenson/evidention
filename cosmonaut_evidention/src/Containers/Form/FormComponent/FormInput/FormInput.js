import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

const FormInput = (props) => {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                htmlFor={props.htmlFor}
                id={props.id}
                type={props.type}
                onChange={props.changed}
                onBlur={props.onBlur}
                value={props.value}
            />
            <Form.Text className="text-muted">
                {props.error ?
                    <div>
                        <h5>{props.error}</h5>
                    </div>: null}
            </Form.Text>
        </Form.Group>
    );
};

export default FormInput;