import React from 'react';
import Link from '@mui/material/Link';

function Banner(){
    return(
        <div style={{backgroundColor:'lightgray', color:'white', height:"25vh", marginTop:"1rem"}}>
            <section style={{width: "50%", marginLeft:"2rem"}}>
                <h1>Title of longer featured blog post</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur.
                </p>
                <Link href="#">Continue reading...</Link>
            </section>
        </div>
    )
}
export default Banner