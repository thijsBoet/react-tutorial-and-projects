import React from "react";
import {useParams} from 'react-router-dom'

export default function ProductDetails() {
  const {id} = useParams();
  return (
    <h1>Product details page. Product id is: {id}</h1>
  )
}
