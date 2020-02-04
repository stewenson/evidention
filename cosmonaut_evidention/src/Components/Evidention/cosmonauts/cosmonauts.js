import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cosmonauts.scss';
import Cosmonaut from "./cosmonaut/cosmonaut";
import {Table} from "react-bootstrap";

const API_URL = 'https://evidence-of-cosmonauts.firebaseio.com/evidence-of-cosmonauts';
function Cosmonauts(props) {
    const [data, setData] = useState();
    const [isDelete, setIsDelete] = useState('');

    console.log(props.lastDeletedId);
    useEffect(() => {
        axios.get(API_URL + '.json')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => {
                console.log(err)
        })
    },[props.lastId, isDelete]);

    const deleteHandler = (key) => {
        axios.delete(API_URL + '/' + key + '.json')
            .then(res => {
                setIsDelete(key);
            }).catch(err => {
            console.log(err)
        });
    };

    let evidention;
    let notdata;
    if (data) {
        evidention = Object.entries(data).map(([key, data]) => (
            <tr key={key}>
                <Cosmonaut
                    firstName={data.firstName}
                    lastName={data.lastName}
                    dateOfBirth={data.dateOfBirth}
                    superPower={data.superPower}
                    keyToDelete={key}
                    deleted={() => deleteHandler(key)}
                />
            </tr>
        ))
    } else {
        notdata = (
            <h2>Nothing to show</h2>
        )
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Date of Birth</td>
                        <td>Superpower</td>
                    </tr>
                </thead>
                <tbody>
                {evidention}
                </tbody>
            </Table>
            {notdata}
        </div>
    );
}

export default Cosmonauts;
