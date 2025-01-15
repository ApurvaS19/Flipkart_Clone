import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Card} from '@mui/material';
import { Container } from '@mui/material';

export default function Pa() {

   const [email, setEmail] = useState({});  
   const [password, setPassword] = useState();
   

   function SubmitData(){
   
    setEmail((email));
    setPassword((password));
    console.log(email);    
    console.log(password );
    
   }

  return (   
    <>    <Container>
     
        <Card sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center',  width: '100%',  padding: 4,
                    gap: 2, margin: 'auto',  maxWidth: '450px'}} variant="outlined">
         
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign in
          </Typography>
          <Box component="form" 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField               
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"                
                required
                fullWidth
                variant="outlined"
                onChange={(e)=>{setEmail(e.target.value); 
                console.log("email",email);}}           
              />             
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField               
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"               
                required
                fullWidth
                variant="outlined"
                onChange={(e)=>{setPassword(e.target.value);
                 console.log("Password",password);}}
               
               
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button type="button" name="submit" value="submit" variant="contained"   
              onClick={(e)=>{SubmitData()}}
            >
              Sign in
            </Button>
           
          </Box>       
        
        </Card>
        </Container>
 
       
        </>
  );
}