import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ cosmonautPerPage, totalCosmonaut, paginate}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalCosmonaut / cosmonautPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumber.map(number => (
                <li key={number} className="page-item">
                    <Button onClick={() => paginate(number)}
                        className="page-link"
                    >
                        {number}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;