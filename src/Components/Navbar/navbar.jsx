import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
function Navbar(){
    return(
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{ bgcolor: "white", color: "black"}}>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "blue"}}>
                        Subscribe
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <b>Blog</b>
                    </Typography>
                    <SearchIcon />
                    <Button variant="outlined">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <br/>
            <Box>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Technology'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Design'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Culture'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Business'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Politics'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Opinion'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Science'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Health'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Style'}
                </Link>
                <Link href="#" color="inherit" sx={{ px : 6 }}>
                    {'Travel'}
                </Link>
            </Box>
        </>
    )
}
export default Navbar