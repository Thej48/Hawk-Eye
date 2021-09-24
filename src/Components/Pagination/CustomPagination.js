import { Pagination } from '@mui/material';
import React from 'react';
import './CustomPagination.css';
import { makeStyles } from '@material-ui/styles';


const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    
    const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      border: "2px solid white"
    },
    "& .MuiPaginationItem-root:hover":{
      backgroundColor: "gray",
    },
    "& .Mui-selected":{
      backgroundColor: "black",
    }
  }
}));
    
    const classes = useStyles();

    
    
    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}
        >
            <Pagination count={numOfPages} classes={{ ul: classes.ul }} size="medium" color="primary" variant="outlined" shape="round" onChange={(e) => handlePageChange(e.target.textContent) } hideNextButton hidePrevButton/>
        </div>
    );

    
};

export default CustomPagination;

    
    



