import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';

import { makeStyles } from '@material-ui/styles';
import { useEffect } from 'react';
import { useHistory } from 'react-router';



const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        backgroundColor: 'gray',
        bottom: 0,
        zIndex: 100,
    }
});




export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0)
            history.push("/");
        else if (value === 1)
            history.push("/movies");
        else if (value === 2)
            history.push("/series");
        else if (value === 3)
            history.push("/search");
    }, [value, history])

    return (
        <Box >
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction   label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction   label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction   label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction   label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
