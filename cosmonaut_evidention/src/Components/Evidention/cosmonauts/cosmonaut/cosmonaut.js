import React from 'react';
import {Button} from "react-bootstrap";

function Cosmonaut(props) {
    return (
        <>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.dateOfBirth}</td>
            <td>{props.superPower}</td>
            <td>
                <Button variant="warning" type="submit">
                    Edit
                </Button>
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
