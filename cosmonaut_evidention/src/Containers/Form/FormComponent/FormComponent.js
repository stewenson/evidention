import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import FormInput from "./FormInput/FormInput";

const FormComponent = (props) => {
    return (
        <Form onSubmit={props.send}>

            <FormInput
                label={'First Name'}
                htmlFor={'firstName'}
                id={'firstName'}
                type={'text'}
                changed={props.changed}
                onBlur={props.onBlur}
                value={props.firstName}
                error={props.firstNameError}
            />
            <FormInput
                label={'Last Name'}
                htmlFor={'lastName'}
                id={'lastName'}
                type={'text'}
                changed={props.changed}
                onBlur={props.onBlur}
                value={props.lastName}
                error={props.lastNameError}
            />
            <FormInput
                label={'Date of Birth'}
                htmlFor={'dateOfBirth'}
                id={'dateOfBirth'}
                type={'date'}
                changed={props.changed}
                onBlur={props.onBlur}
                value={props.dateOfBirth}
                error={props.dateOfBirthError}
            />
            <FormInput
                label={'Superpower'}
                htmlFor={'superPower'}
                id={'superPower'}
                type={'text'}
                changed={props.changed}
                onBlur={props.onBlur}
                value={props.superPower}
                error={props.superPowerError}
            />
            <Button
                variant="success"
                type="submit"
                onClick={props.clicked}
            >
                Submit
            </Button>
        </Form>
    );
};

export default FormComponent;