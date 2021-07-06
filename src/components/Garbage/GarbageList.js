//styling
import { ProductsStyle } from "../../styles";

//components
import GarbageCard from "../Garbage/GarbageCard";
//
// import { useState } from "react";
import { useSelector } from "react-redux";

const GarbageList = (props) => {
  const garbages = useSelector((state) => state.things.garbage);

  const filteredList = garbages.map((garbage) => (
    <GarbageCard key={garbage.id} garbage={garbage} />
  ));

  return (
    <div>
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default GarbageList;
