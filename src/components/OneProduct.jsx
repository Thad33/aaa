import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../App";

function OneProduct() {
  const products = useContext(ProductsContext);

  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    let product = products.find((p) => p.id === +id);

    setProduct(product);
  }, [id, products]);

  const handleCart = (id) => {
    let p = products.find((product) => product.id === parseInt(id, 10));
    console.log(p);
  };

  return (
    <div className="productCard">
      <div className="oneProductImg">
        <img src={product?.images[0]} alt="" />
      </div>
      <div className="oneProductDetails">
        <span className="pTitle">{product?.title}</span>
        <span className="pDesc">{product?.description}</span>
        <span className="priceDetails">
          <span className="pPrice">Price: ${product?.price}</span>
          <span className="pDiscount">
            Discount: {product?.discountPercentage}%
          </span>
        </span>
        <button
          className="addtoCartBtn"
          onClick={() => {
            handleCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default OneProduct;
