import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import Sidebar from "../Sidebar/Sidebar";
import SingleProduct from "../SingleProduct/SingleProduct";

export default function Home() {
  const {
    setProduct,
    product,
    getProduct,
    sortType: { byAsc, byDesc, sort,search },
  } = useContext(AppContext);
  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
    });
  }, []);
  useEffect(()=>{},[byAsc, byDesc])
  const transformProducts = () => {
    let sortedProducts = product;
    if (sort !== "") {
      sortedProducts.sort((a, b) => {
        if(sort==="ASC"){
          return a.price - b.price;
        }else if(sort==="DESC"){
          return b.price - a.price;
        }
      });
    }
    if(search){
      sortedProducts = sortedProducts.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()))
    }
    return sortedProducts;
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-wrap m-3">
        {transformProducts().map((item, index) => {
          return <SingleProduct key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
