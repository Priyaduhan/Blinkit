import React, { useEffect } from "react";

const Products = () => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "GET",
        credentials: "include",
        // headers: {
        //   Authorization: localStorage.getItem("token"),
        // },
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("some error catched", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>showing products list
    
  </div>;
};

export default Products;
