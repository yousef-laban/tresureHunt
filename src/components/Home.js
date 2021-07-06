//styling
import { Center, Image } from "../styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Center>
      <h1>Treasure Hunt</h1>
      <div>
        <Link to="/treasures">
          <button
            style={{ margin: "10px" }}
            type="button"
            class="btn btn-secondary"
          >
            Treasure
          </button>
        </Link>
        <Link to="/garbages">
          <button
            style={{ margin: "10px" }}
            type="button"
            class="btn btn-secondary"
          >
            Garbage
          </button>
        </Link>
      </div>
      <Image
        src="https://augusta.ca/wp-content/uploads/Picture1-3.png"
        alt="logo"
      />
    </Center>
  );
};

export default Home;
