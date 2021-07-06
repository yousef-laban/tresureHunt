//styling
import { Item, ProductImage } from "../../styles";

const TreasureCard = (props) => {
  const { treasure } = props;
  return (
    <Item className="card" style={{ width: "18rem" }}>
      <ProductImage
        className="card-img-top"
        src={treasure.image}
        alt={treasure.name}
      />
      <div className="card-body">
        <h5 className="card-title">{treasure.name}</h5>
      </div>
    </Item>
  );
};

export default TreasureCard;
