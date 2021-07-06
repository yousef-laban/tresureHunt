//styling
import { Item, ProductImage } from "../../styles";

const GarbageCard = (props) => {
  const { garbage } = props;
  return (
    <Item className="card" style={{ width: "18rem" }}>
      <ProductImage
        className="card-img-top"
        src={garbage.image}
        alt={garbage.name}
      />
      <div className="card-body">
        <h5 className="card-title">{garbage.name}</h5>
      </div>
    </Item>
  );
};

export default GarbageCard;
