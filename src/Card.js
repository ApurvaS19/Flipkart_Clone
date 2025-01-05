import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState ,useEffect} from "react";
import { Container,Grid2 } from '@mui/material';
import axios from 'axios'

export default function BasicCard() {
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://dummyjson.com/products")
        .then((res)=>{
          console.log(res)
           setData(res.data.products)
      })
      },[])
      
  return <>
  <Container sx={{margin:5}} >
  <Grid2 spacing={5} container >
   {data && data.map((val)=>{
   return <Grid2 item size={{xs:6,md:4}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="Lizard.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
                   
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>       
       Information:{val.data}
        </Typography>
        
      </CardContent>
      
      <CardActions>
      <a href={`/Product/${val.id}`}>View</a>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
   
    </Card> 
    </Grid2>
   })} 
 </Grid2>
 </Container>
</>
}
