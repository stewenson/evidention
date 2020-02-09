import React from 'react';
import EditCosmonaut from "../../EditCosmonaut/EditCosmonaut";
import ButtonComponent from "../../../../Containers/ButtonComponent/ButtonComponent";

function Cosmonaut(props) {

    return (
        <React.Fragment>
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
                <ButtonComponent
                    variant={'danger'}
                    type={'submit'}
                    clicked={props.deleted}
                    text={'Delete'}
                />
            </td>
        </React.Fragment>
    );
}

export default Cosmonaut;
