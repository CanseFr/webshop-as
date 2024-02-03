import {useEffect} from "react";

export const Shop = () => {
  useEffect(()=>{
    fetch('http://localhost:3000/api/articles').then((res)=>res.text()).then((data)=>console.log(data))
  })
  return <p>Shop</p>;
};
