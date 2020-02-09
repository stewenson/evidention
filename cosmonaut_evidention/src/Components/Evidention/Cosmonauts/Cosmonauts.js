import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import './Cosmonauts.scss';
import Cosmonaut from "./Cosmonaut/Cosmonaut";
import NewCosmonaut from "../NewCosmonaut/NewCosmonaut";
import Pagination from "../../Pagination/Pagination";
import ButtonComponent from "../../../Containers/ButtonComponent/ButtonComponent";

const API_URL = 'https://evidence-of-cosmonauts.firebaseio.com/evidence-of-cosmonauts';
function Cosmonauts() {
    const [data, setData] = useState();
    const [editedCosmonaut, setEditedCosmonaut] = useState(false);
    const [allCosmonauts, setAllCosmonauts] = useState(true);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [cosmonautPerPage] = useState(5);

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

    const indexOfLastCosmonaut = currentPage * cosmonautPerPage;
    const indexOfFirstCosmonaut = indexOfLastCosmonaut - cosmonautPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let evidention;
    let notData;
    let totalData;

    if (data && editedCosmonaut) {
        evidention = Object.entries(data)
            .filter(([key, value]) => value.wasEdited === true )
            .map(([key, data]) => (
             <tr style={{ backgroundColor: data.wasEdited ? '#e8f5e9' : 'white'}}
                 key={key}
             >
                 <Cosmonaut
                     firstName={data.firstName}
                     lastName={data.lastName}
                     dateOfBirth={data.dateOfBirth}
                     superPower={data.superPower}
                     wasEdited={data.wasEdited}
                     keyToDelete={key}
                     deleted={() => deleteHandler(key)}
                     keyForEdit={key}
                     loadData={loadData}
                 />
             </tr>
    ))
    } else if (data && allCosmonauts) {
        totalData = Object.keys(data).length;
        evidention = Object.entries(data)
            .slice(indexOfFirstCosmonaut, indexOfLastCosmonaut)
            .map(([key, data]) => (
                <tr style={{ backgroundColor: data.wasEdited ? '#e8f5e9' : 'white'}}
                    key={key}
                >
                    <Cosmonaut
                        firstName={data.firstName}
                        lastName={data.lastName}
                        dateOfBirth={data.dateOfBirth}
                        superPower={data.superPower}
                        wasEdited={data.wasEdited}
                        keyToDelete={key}
                        deleted={() => deleteHandler(key)}
                        keyForEdit={key}
                        loadData={loadData}
                    />
                </tr>
            ))
    } else {
       notData = (
           <h2>Nothing to show</h2>
       );
    }
    return (
        <React.Fragment>
        <div className="cosmonauts">
            <div>
                <NewCosmonaut
                    loadData={loadData}
                />
            </div>
                <ButtonComponent
                    clicked={() => [setEditedCosmonaut(false), setAllCosmonauts(true)]}
                    cName={'all'}
                    variant={'link'}
                    text={'All cosmonauts'}
                />
                <ButtonComponent
                    clicked={() => [setEditedCosmonaut(true), setAllCosmonauts(false)]}
                    cName={'edited'}
                    variant={'link'}
                    text={'Edited cosmonauts'}
                />
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
                <Pagination
                    cosmonautPerPage={cosmonautPerPage}
                    totalCosmonaut={totalData}
                    paginate={paginate}
                />
            </div>
            {notData}
        </React.Fragment>
    );
}

export default Cosmonauts;
