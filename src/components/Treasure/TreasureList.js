//styling
import { ProductsStyle } from "../../styles";

//components
import TreasureCard from "../Treasure/TreasureCard";
//
// import { useState } from "react";
import { useSelector } from "react-redux";

const TreasureList = (props) => {
  const treasures = useSelector((state) => state.things.treasure);

  const filteredList = treasures.map((treasure) => (
    <TreasureCard key={treasure.id} treasure={treasure} />
  ));

  return (
    <div>
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default TreasureList;
