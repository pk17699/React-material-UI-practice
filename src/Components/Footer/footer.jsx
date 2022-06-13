import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer(){
    return(
        <Box>
            <AppBar position="static">
                <Typography sx={{textAlign:"center", backgroundColor:"white", color:"black"}}>
                    <h1>Footer</h1>
                    <p>Something here to give footer a purpose</p>
                    <p>Copyright@ material UI 2022</p>
                </Typography>
            </AppBar>
        </Box>
    )
}
export default Footer