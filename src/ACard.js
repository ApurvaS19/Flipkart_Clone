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
import { useState ,useEffect} from "react";
import { Container,Grid2 } from '@mui/material';
import axios from 'axios'
import Appbar from './Appbar';

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

export default function ACard() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
      .then((res)=>{
        console.log(res)
         setData(res.data.products)
    })
    },[])

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <>
  {/* <Appbar/> */}
  <Container sx={{margin:5}} >
    <Grid2 spacing={5} container >
    {data && data.map((val)=>{
      return <Grid2 item size={{xs:6,md:4}}>
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <a href={`/ACard/Product/${val.id}`}>View</a>
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
          {/* <Typography sx={{ marginBottom: 2 }}>Method:</Typography> */}
          {/* <Typography sx={{ marginBottom: 2 }}>         
          </Typography>

          <Typography sx={{ marginBottom: 2 }}>          
          </Typography>

          <Typography sx={{ marginBottom: 2 }}>           
          </Typography>

          <Typography>
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
    </Grid2>
     })} 
    </Grid2>
    </Container>
    </>
}
