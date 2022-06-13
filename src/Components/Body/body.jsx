import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Body(){
    return(
        <div>
            <section style={{width:"60%", float:"left", marginLeft:"4rem"}}>
                <h4>from the firehouse</h4>
                <hr />
                <h1>Sample blog Post</h1>
                <p>April 1, 2020 by <em><Link href="#">Olivier</Link></em></p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <h3>Heading</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <h5>Sub-heading 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                <h5>Sub-heading 2</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <h1>New feature</h1>
                <p>March 14, 2020 by <em><Link href="#">Tom</Link></em></p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</li>
                    <li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</li>
                    <li>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </section>

            <section style={{width:"30%", float:"right", marginTop:"2rem", marginRight:"1rem"}}>
                <Card sx={{ width:"100%", backgroundColor:"lightgray"}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            About
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud
                        </Typography>
                    </CardContent>
                </Card>
                <h1>Archives</h1>
                <ul style={{listStyle:"none", paddingLeft:"0"}}>
                    <li><Link href="#">March 2020</Link></li>
                    <li><Link href="#">February 2020</Link></li>
                    <li><Link href="#">January 2020</Link></li>
                    <li><Link href="#">November 1999</Link></li>
                    <li><Link href="#">October 1999</Link></li>
                    <li><Link href="#">September 1999</Link></li>
                    <li><Link href="#">August 1999</Link></li>
                    <li><Link href="#">July 1999</Link></li>
                    <li><Link href="#">June 1999</Link></li>
                    <li><Link href="#">May 1999</Link></li>
                    <li><Link href="#">April 1999</Link></li>
                </ul>
                <h1>Social</h1>
                <ul style={{listStyle:"none", paddingLeft:"0"}}>
                    <li><Link href="#"><GitHubIcon color="primary"/>Github</Link></li>
                    <li><Link href="#"><TwitterIcon color="primary"/>Twitter</Link></li>
                    <li><Link href="#"><FacebookIcon color="primary"/>Facebook</Link></li>
                </ul>
            </section>
        </div>
    )
}
export default Body