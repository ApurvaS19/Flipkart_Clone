


import * as React from 'react';
import { useParams } from "react-router";
import { useState , useEffect} from "react";
import axios from 'axios';

function Product(){

    let {id}=useParams();
    const[data,setData]=useState([])

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
         setData(res.data)
      })
      },[])

    return <>
    <div>
    <h2>Product page{id}</h2>  
    <h4>Title:</h4>{data.title} <br/> 
    <h4>Body:</h4>{data.body}
    </div>
    </>
        
}
export default Product;