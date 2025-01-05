import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
function Viewproduct(){
    let arr=[{title:"ADIDAS HOODIES",description:"ADIDAS Women Full Sleeve Printed Reversible Hooded Sweatshirt",amount:"Rs.1,801"},{title:"Noise SmartWatch",description:"Display with Bluetooth Calling,AI Voice Assistant Smartwatch",amount:"Rs.1,399"},{title:"NIKE",description:"Green basketball shoes ,designed for sports,Outer Material -Textile",amount:"Rs.5,695"},{title:"Dry Fruits and Nuts",description:"OPEN SECRET premium Whole Kaju healthier alternative",amount:"Rs.499"},{title:"Winter Food-Pista",description:"American California Roasted & Salted Pista,Gluten & GMO free",amount:"Rs.249"},{title:"PEANUT BUTTER",description:"AS-IT-IS Nutrition Peanut Butter Crunchy(Natural & Unsweetened",amount:"Rs.399"}]
    return <>
    <a href="/">Login</a><br/>
    <Container sx={{margin:10}}>
        <Grid2 container spacing={10}>
            {arr.map((val,index)=>{
                return<Grid2 item size={{xs:6,md:4}}>
            <Card sx={{minWidth:275,backgroundColor:"pink"}}>
            <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          <h2>Product</h2>
        </Typography>
        <Typography variant="h5" component="div">{val.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{val.description}</Typography>
        <Typography variant="body2">
         {val.amount}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">View product</Button>
      </CardActions>
    </Card>
    </Grid2>
})}

        </Grid2>
        </Container>

    </>

}
export default Viewproduct;