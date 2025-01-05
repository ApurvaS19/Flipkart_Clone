import * as React from 'react';
import { useState , useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function BasicTable() {
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
           setData(res.data)
      })
      },[])
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
            <TableCell align="right">Product</TableCell>
          </TableRow>
        </TableHead>

          <TableBody>
           return{data.map((val)=>
           <TableRow
            key="1"
            sx={{'&:last-child td,&:last-child th':{border:0}}}
               >
            <TableCell component="th"scope="row">{val.id}</TableCell>
            <TableCell align="right">{val.title}</TableCell>
            <TableCell align="right">{val.body}</TableCell>
            <TableCell align="right"><a href={`/Product/${val.id}`}>View</a></TableCell>
           </TableRow>
            )}
          </TableBody> 
      </Table>
    </TableContainer>
  </>
}