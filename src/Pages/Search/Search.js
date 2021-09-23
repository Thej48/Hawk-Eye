import { Button, Tab, Tabs, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Search.css'
import { createTheme } from '@material-ui/core/styles'
// import { createTheme, Mu } from '@material-ui/core';

import { ThemeProvider } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import TrendingCard from '../../Components/TrendingCard/TrendingCard';

const Search = () => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });


    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@---LOGIC---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

    const fetchSearch = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );

        setContent(data.results);
        setNumOfPages(data.total_pages);
    };


    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page])



    return (
        <div>

            <ThemeProvider theme={darkTheme}>

                <div style={{ display: "flex", margin: "15px 0" }}>

                    <TextField
                        style={{ flex: 1, color: "white", borderBottomColor: "white" }}
                        className="searchBox"
                        label="Search"
                        textColor="white"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <Button variant="contained" style={{ marginLeft: 10 }} onClick={fetchSearch}>
                        <SearchIcon />
                    </Button>

                </div>


                <Tabs value={type} indicatorColor="primary" textColor="primary"
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    style={{paddingBottom: "5", width: "100%" }}
                >
                    <Tab style={{display:"flex", width: "50%" }} label="Search Movies" />
                    <Tab style={{display:"flex", width: "50%" }} label="Search TV Series" />
                </Tabs>

            </ThemeProvider>

            <div className="trending">
                {content && content.map((c) => (
                    <TrendingCard
                    key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={type ? "tv" : "movie"}
                        vote_average={c.vote_average}
                    />
                ))}
                {searchText &&
                !content && 
                (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>

            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}

        </div>
    );
};

export default Search;