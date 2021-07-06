//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TreasureList from "./components/Treasure/TreasureList";
import GarbageList from "./components/Garbage/GarbageList";
import Signin from "./components/usersComponents/Signin";
import Signup from "./components/usersComponents/Signup";
import PopUp from "./components/usersComponents/PopUp";

//
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/message/:message">
          <PopUp />
        </Route>

        <Route path="/treasures">
          <TreasureList />
        </Route>

        <Route path="/garbages">
          <GarbageList />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
