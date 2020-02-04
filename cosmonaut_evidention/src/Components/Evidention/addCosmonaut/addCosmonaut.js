import React, {useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import ModalForm from '../../../Containers/Modal/modalForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cosmonauts from "../cosmonauts/cosmonauts";

const API_URL = 'https://evidence-of-cosmonauts.firebaseio.com/evidence-of-cosmonauts.json';
function AddCosmonaut() {
    const [data, setData] = useState({});

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-zA-Z]*$/.test(values.firstName)) {
            errors.firstName = 'First Name must contain only text';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (!/^[a-zA-Z]*$/.test(values.lastName)) {
            errors.lastName = 'Last Name must contain only text';
        }

        if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Required';
        } else if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(values.dateOfBirth)) {
            errors.dateOfBirth = 'First Name must contain only text';
        }

        if (!values.superPower) {
            errors.superPower = 'Required';
        } else if (!/^[a-zA-Z]*$/.test(values.superPower)) {
            errors.superPower = 'First Name must contain only text';
        }

        return errors;
    };
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                superPower: '',
                wasEdited: false,
            },
            validate,
            onSubmit: values => {
                const data = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    dateOfBirth: values.dateOfBirth,
                    superPower: values.superPower,
                    wasEdited: values.wasEdited
                };
                axios.post(API_URL, data)
                    .then(res => {
                        setData(res.data);
                    }).catch(err => {
                        console.log(err)
                });
            }
        });

    return (
        <div>
           <ModalForm
                send={formik.handleSubmit}
                changed={formik.handleChange}
                onBlur={formik.handleBlur}
                firstName={formik.values.firstName}
                lastName={formik.values.lastName}
                dateOfBirth={formik.values.dateOfBirth}
                superPower={formik.values.superPower}
                firstNameError={formik.errors.firstName}
                lastNameError={formik.errors.lastName}
                dateOfBirthError={formik.errors.dateOfBirth}
                superPowerError={formik.errors.superPower}
           />
           <Cosmonauts
               lastId={data.name}
           />
        </div>
    );
}

export default AddCosmonaut;
