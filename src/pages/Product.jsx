import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);

  const getBlog = async () => {
    const { data } = await axios.get("http://localhost:3000/product");
    setData(data);
  };
  useEffect(()=>{
    getBlog();
  },[])

  const navigate = useNavigate();

  const goDetailpage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
    {
      data.map((item)=>(
        <div key={item.id}>
          <h1>{item.headline}</h1>
          <button type="button" onClick={()=> goDetailpage(item.id)}><img src={item.image}/></button>
          <h2>{item.description}</h2>
          <h2>{item.authorname}</h2>
        </div>
      ))
    }
    </div>
  )
}

export default Product
