import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
// import classes from './ProductDetail.mudule.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from "../../Api/endPoints";
// import Loader from "../../Components/Loader/Loader"
import ProductCard from '../../Components/Product/productCard'

function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct]=useState({})
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, [])
  
  return (
    <LayOut>

      <ProductCard
        product={product}
      />     
    </LayOut>
  )
}

export default ProductDetail
