import * as React from 'react';
import { useState , useEffect} from "react";
import axios from 'axios';


export default function Api() {
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
           setData(res.data)
      })
      },[])
  return <>
           <center><h2>FAKE API</h2></center> 
            {data.map((data)=>
           
            <div>{data.body}</div>
            )}
  </>
}