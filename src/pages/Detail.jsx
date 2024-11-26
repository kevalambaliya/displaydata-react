import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();

    const [data,setdata] = useState({});

    const getdata = async () => {
        const {data} = await axios.get(`http://localhost:3000/product/${id}`);
        setdata(data);
    };

    useEffect(()=>{
        getdata();
    },[]);
  return (
    <div>
     <div>
     <img src={data.image} alt="" />
      <h1>{data.description}</h1>
      <h1>{data.authorname}</h1>
     </div>
    </div>
  )
}

export default Detail
