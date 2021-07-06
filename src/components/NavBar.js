// import { Link } from "react-router-dom";
import { NavB, Logo } from "../styles";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <NavB className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://augusta.ca/wp-content/uploads/Picture1-3.png"
          alt="logo"
        ></img>

        <h>Treasure Hunt</h>
      </Logo>

      <div>
        {/* <Link to="/categories"> */}
        <button
          style={{ margin: "10px" }}
          type="button"
          class="btn btn-secondary"
        >
          Sign In
        </button>
        {/* </Link> */}
        {/* <Link to="/categories"> */}
        <button
          style={{ margin: "10px" }}
          type="button"
          class="btn btn-secondary"
        >
          Sign Up
        </button>
        {/* </Link> */}
      </div>
    </NavB>
  );
};

export default NavBar;
