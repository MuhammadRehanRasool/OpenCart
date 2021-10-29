import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./views/Home";
import Cart from "./views/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <MainLayout>
              <Cart />
            </MainLayout>
          </Route>
          <Route path="/">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
