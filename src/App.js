import QrTest from "./components/QrTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <QrTest />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
