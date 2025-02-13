
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from "react";
import { Container, Grid2 } from '@mui/material';
import { CountContext, ProductCountContext } from './Context';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios'
import Appbar from './Appbar';
import DeleteIcon from '@mui/icons-material/Delete';


 
const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ACard(){

  let props = React.useContext(ProductCountContext)
  const { cart, removeFromCart } = React.useContext(ProductCountContext)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res)
        setData(res.data.products)
      })
  }, [])

  const totalPrice = props.arr.reduce((acc, product) => acc + product.price, 0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
    
  };

  
    

    

  return <>

    <Grid2 container spacing={2}>
      <Grid2 container size={9}>

        {data && data.map((val) => {
          return <Grid2 item size={4}>
            <Card sx={{ maxWidth: 345 }}>

              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {val.id}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={val.title}

              />
              <CardMedia
                component="img"
                height="194"
                image={val.images[0]}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {val.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>

                <IconButton aria-label="add to favorites"        
               
                
                 >

                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button variant="contained" size='small' href={`/ACard/Product/${val.id}`} style={{ marginRight: '15px' }}>View</Button>
                <Button variant="contained" onClick={(event) => {

                  props.addToCart(val);

                }} startIcon={<ShoppingCartIcon />}></Button>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
              </Collapse>
            </Card>
          </Grid2>
        })}
      </Grid2>


      <Grid2 size={3}>
        {/* <Grid2 container style={{ backgroundColor: " #0066B2", border: "2px solid black" }}> */}

        {props.arr.map((val, index) => {
          return <Grid2 item size={{ xs: 6, md: 4 }}>
            <Card sx={{ minWidth: 275, backgroundColor: "#4B9CD3", margin: "40px", border: "2px solid black" }} >
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{ color: "black" }}>
                  <b>Title: </b>{val.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary', mb: 1.5 }} style={{ color: "black" }}>
                  {/* <b>Quantity:</b>{val.quantity} */}
                </Typography>
                <Typography variant="body2" style={{ color: "black" }}>
                  <b>Amount:</b>{val.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' size="small" style={{ marginRight: "10px", backgroundColor: "red" }} onClick={(event) => {
                  props.deleteItem(val.id);
                }}> <DeleteIcon /></Button>
              </CardActions>

            </Card>
          </Grid2>

        })}
        {/* </Grid2> */}
        <span id="bu"> <b>Total:<strong>${totalPrice}</strong></b> </span><br /><br />
        <span id="bu"><Button variant="contained" >CheckOut</Button></span>

      </Grid2>
    </Grid2>
  </>
  }
