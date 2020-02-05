import React from 'react';
import {Button} from "react-bootstrap";
import EditCosmonaut from "../../EditCosmonaut/EditCosmonaut";
import './Cosmonaut.scss';

function Cosmonaut(props) {

    return (
        <>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.dateOfBirth}</td>
            <td>{props.superPower}</td>
            <td>
                <EditCosmonaut
                    firstName={props.firstName}
                    lastName={props.lastName}
                    dateOfBirth={props.dateOfBirth}
                    superPower={props.superPower}
                    editKey={props.keyForEdit}
                    loadData={props.loadData}
                />
            </td>
            <td>
                <Button
                    variant="danger"
                    type="submit"
                    onClick={props.deleted}
                >
                    Delete
                </Button>
            </td>
        </>
    );
}

export default Cosmonaut;
