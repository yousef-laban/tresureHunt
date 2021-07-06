//styling
import { ProductsStyle } from "../../styles";

//components
import TreasureCard from "../Treasure/TreasureCard";
//
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTreasure } from "../../store/actions/thingsActions";
import { Redirect, useHistory } from "react-router";

const TreasureList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const treasures = useSelector((state) => state.things.treasure);

  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  const filteredList = treasures.map((treasure) => (
    <TreasureCard key={treasure.id} treasure={treasure} />
  ));
  useEffect(() => {
    if (user) dispatch(fetchTreasure());
    else history.push("/");
  }, []);

  return (
    <div>
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default TreasureList;
