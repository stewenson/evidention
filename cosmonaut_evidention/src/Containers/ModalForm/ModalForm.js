import React, {useState} from 'react';
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalForm.scss';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import FormComponent from "../Form/FormComponent/FormComponent";

function ModalForm(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="modalForm">
            <ButtonComponent
                variant={props.variant}
                text={props.text}
                clicked={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormComponent
                        //actions
                        send={props.send}
                        changed={props.changed}
                        onBlur={props.onBlur}
                        clicked={handleClose}
                        //names
                        firstName={props.firstName}
                        lastName={props.lastName}
                        dateOfBirth={props.dateOfBirth}
                        superPower={props.superPower}
                        // errors
                        firstNameError={props.firstNameError}
                        lastNameError={props.lastNameError}
                        dateOfBirthError={props.dateOfBirthError}
                        superPowerError={props.superPowerError}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalForm;