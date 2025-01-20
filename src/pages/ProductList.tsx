
import ProductItem from '../components/ProductItem';
import React, { useState, useEffect } from 'react';
import { useAllGoods } from '../hooks/useAllGoods';
import IUserGoods from '../interfaces/IUserGoodts';
import { Col, Row } from "react-bootstrap"


const ProductList: React.FC = () => {
  const { goods, loading, error } = useAllGoods();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Product List</h1>
      <Row md={2} xs={1} lg={3} className="g-4">
        {goods.map(item => (
          <Col key={item.id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;

