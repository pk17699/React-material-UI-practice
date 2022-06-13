import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CardDisplay(){
    return(
        <div>
            <Card sx={{ display:'flex', width:"49%", height:"30vh", float:"left"}}>
                <Box sx={{ display:'flex', flexDirection:'column', width:"70%"}}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            Featured Post
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            This is wider card with supporting text below as a
                            <br/> 
                            natural lead-in to additional content
                        </Typography>
                        <Typography>
                            <Link href="#" underline="none">
                                Continue reading...
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width:"30%" }}
                    image="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </Card>
        <   Card sx={{ display:'flex', width:"49%", height:"30vh", float:"right"}}>
                <Box sx={{ display:'flex', flexDirection:'column', width:"70%"}}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            Featured Post
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            This is wider card with supporting text below as a
                            <br/> 
                            natural lead-in to additional content
                        </Typography>
                        <Typography>
                            <Link href="#" underline="none">
                                Continue reading...
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width:"30%"}}
                    image="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </Card>
        </div>
    )
}
export default CardDisplay