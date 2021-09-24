import { Pagination } from '@mui/material';
import React from 'react';
import './CustomPagination.css';

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}
        >
            <Pagination count={numOfPages} size="medium" color="primary" variant="outlined" shape="round" onChange={(e) => handlePageChange(e.target.textContent) } hideNextButton hidePrevButton/>
        </div>
    );
};

export default CustomPagination;
