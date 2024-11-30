import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Results.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints.jsx'
import ProductCard from '../../Components/Product/productCard.jsx'

function Results() {

  const [result, setResults]= useState()
  const { categoryName } = useParams()

  useEffect(() => {
    
  axios
    .get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    }); 
  }, [])
  


  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {result ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results
