import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context";
import { CartContext } from "../context";


const reducer = (products, action) => {
  switch (action.type) {
    case 'ADDPRODUCT': {
      return [
        ...products,
        {
          id: action.id,
          title: action.title,
          image: action.thumbnail,
          price: action.price
          
        }
      ]
    }
      
  
    default:
      break;
  }
}


function ProductsDisplay({  category }) {
  let products = useContext(ProductsContext)
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(products);
  const handleNavigation = (id) => {
    navigate(`/products/${id}`);
  };

  const [state, dispatch] = useReducer();

  const [cartProduct, setProductCart] = useState([]);

  useEffect(()=>{
    if(category==='all'){
        setData(products)
    }else{
      console.log(category)
        const itemsInCategory = products.filter(p=>p.category === category)
        setData(itemsInCategory)
    }

  }, [products, category])

  const handleCart = (id) => {
    let product = products.find(product=> product.id === parseInt(id, 10))
    console.log(product);
    setProductCart(product);
  }
 
  return (
    <CartContext.Provider value={products}>
      <div className="productsContainer">
      {data && data.length > 0 ? (
        data.map((product) => {
           
          return (
            <div className="product" key={product.id}>
              <div
                className="pImg"
                onClick={() => handleNavigation(product.id)}
              >
                <img src={product?.images[0]} alt="product " />
              </div>
              <div className="pDetails">
                
                <span>{product.title}</span>
                <span className="price">Price: ${product.price}</span>

                {/* <span className="seeMore">
                  <Link to={`/products/${product.id}`}>See more</Link>
                </span> */}
              </div>
              <button className="addtoCartBtn" onClick={()=>handleCart(product.id)}>Add to Cart</button>
            </div>
          );
        })
      ) : (
        <div>
          <h2>There are no products</h2>
        </div>
      )}
    </div>
    </CartContext.Provider>
      
    
  );
}

export default ProductsDisplay;
