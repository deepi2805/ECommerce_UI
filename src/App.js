import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.js"
import Registration from "./Registration.js"
import Menu, {Home,Title} from "./Home"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/registration"><Registration/></Route>
          <Route exact path="/forgotpassword"></Route>
          <Route exact path="/home"><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
