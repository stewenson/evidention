import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cosmonauts.scss';
import Cosmonaut from "./Cosmonaut/Cosmonaut";
import {Table} from "react-bootstrap";
import NewCosmonaut from "../NewCosmonaut/NewCosmonaut";

const API_URL = 'https://evidence-of-cosmonauts.firebaseio.com/evidence-of-cosmonauts';

function Cosmonauts(props) {
    const [data, setData] = useState();

    const loadData = () => {
        axios.get(API_URL + '.json')
            .then(res => {
                setData(res.data);
            }).catch(err => {
            console.log(err)
        })
    };

    useEffect(() => {
        loadData();
    },[]);

    const deleteHandler = (key) => {
        axios.delete(API_URL + '/' + key + '.json')
            .then(res => {
                loadData();
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
                    keyForEdit={key}
                    loadData={loadData}
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
            <div>
                <NewCosmonaut
                    loadData={loadData}
                />
            </div>
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
