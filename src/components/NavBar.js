// import { Link } from "react-router-dom";
import { NavB, Logo, FlexStyle } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

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
        {user ? (
          <FlexStyle>
            <h3 style={{ padding: "10px" }}>Hello {user.username} </h3>
            <button
              style={{ margin: "10px" }}
              type="button"
              class="btn btn-secondary"
              onClick={() => dispatch(logout())}
            >
              Sign Out
            </button>
          </FlexStyle>
        ) : (
          <>
            <Link to="/signin">
              <button
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-secondary"
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-secondary"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </NavB>
  );
};

export default NavBar;
