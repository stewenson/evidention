import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import ModalFormEdit from "../../../Containers/ModalFormEdit/ModalFormEdit";

const API_URL = "https://evidence-of-cosmonauts.firebaseio.com/evidence-of-cosmonauts";
function EditCosmonaut(props) {

    const validate = values => {

        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-zA-Z ]*$/.test(values.firstName)) {
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
        } else if (!/^[a-zA-Z]+(, [a-zA-Z ]+)*$/.test(values.superPower)) {
            errors.superPower = 'Superpower Name must contain only text';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: props.firstName,
            lastName: props.lastName,
            dateOfBirth: props.dateOfBirth,
            superPower: props.superPower,
            wasEdited: false,
        },
        validate,
        onSubmit: values => {
            const key = props.editKey;
            const updateData = {
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: values.dateOfBirth,
                superPower: values.superPower,
                wasEdited: true,
                updatedAt: Date.now(),
            };
            axios.put(API_URL+ '/' + key + '.json', updateData)
                .then(res => {
                    props.loadData();
                }).catch(err => {
                    console.log(err);
            });
        }
    });

    return (
        <div>
            <ModalFormEdit
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
        </div>
    );
}

export default EditCosmonaut;
