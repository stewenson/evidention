import React, {useState} from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalFormAdd.scss';

function ModalFormAdd(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="modalForm">
            <Button
                variant="primary"
                onClick={handleShow}>
                Add cosmonaut
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Cosmonaut</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={props.send}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                htmlFor="firstName"
                                id="firstName"
                                type="text"
                                onChange={props.changed}
                                onBlur={props.onBlur}
                                value={props.firstName}
                            />
                            <Form.Text className="text-muted">
                                {props.firstNameError ?
                                    <div>
                                        <h5>{props.firstNameError}</h5>
                                    </div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                htmlFor="lastName"
                                id="lastName"
                                type="text"
                                onChange={props.changed}
                                onBlur={props.onBlur}
                                value={props.lastName}
                            />
                            <Form.Text className="text-muted">
                                {props.lastNameError ?
                                    <div>
                                        <h5>{props.lastNameError}</h5>
                                    </div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                htmlFor="dateOfBirth"
                                id="dateOfBirth"
                                type="date"
                                onChange={props.changed}
                                onBlur={props.onBlur}
                                value={props.dateOfBirth}
                            />
                            <Form.Text className="text-muted">
                                {props.dateOfBirthError ?
                                    <div>
                                        <h5>{props.dateOfBirthError}</h5>
                                    </div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Superpower</Form.Label>
                            <Form.Control
                                htmlFor="superPower"
                                id="superPower"
                                type="text"
                                onChange={props.changed}
                                onBlur={props.onBlur}
                                value={props.superPower}
                            />
                            <Form.Text className="text-muted">
                                {props.superPowerError ?
                                    <div>
                                        <h5>{props.superPowerError}</h5>
                                    </div>: null}
                            </Form.Text>
                        </Form.Group>

                        <Button
                            variant="success"
                            type="submit"
                            onClick={handleClose}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalFormAdd;