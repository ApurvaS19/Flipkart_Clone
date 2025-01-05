import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Typography';
import { Grid2,TextField } from '@mui/material';
function ContactUs(){
return<>
    <a href="/">Login</a><br/>
    <center>
       <Container>
        <Grid2 xs={{border:1}}>
        <Typography >
        <h3><b>Contact Us</b></h3> 
        </Typography>
                <form>
                        <TextField  label="First Name" placeholder="Enter first name" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Last Name" placeholder="Enter last name" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Email" placeholder="Enter email" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Password" placeholder="Enter Password" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Number" placeholder="Enter Phone number" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Message" multilinerows={4} placeholder="Type your message" varient="outlined" fullwidth required/><br/><br/>
                        <Button type="submit" varient="contained" color="primary">Submit</Button><br/><br/>
                        
                </form>
                </Grid2> 
                </Container>
                </center>
        
        
    </>

}
export default ContactUs;
 