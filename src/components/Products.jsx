import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductsContext } from "../App";


function Products() {

  const products = useContext(ProductsContext);

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const handleCategoryNavigation = (category) => {
    navigate(`/products/${category}`);
  };

  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  return (
    <div>
     
      <div className="productsLayout">
        <div>
          <div className="categories">
            {categories.map((category, index) => {
              return (
                <span
                  className="category"
                  key={index}
                  onClick={() => handleCategoryNavigation(category)}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
