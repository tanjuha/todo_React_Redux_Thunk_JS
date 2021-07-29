import React from "react";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./conteiners/Home";
import SingIn from "./conteiners/SingIn";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <SingIn />
          </Route>
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

const PrivateRoute = ({ component, ...rest }) => {
  const routeComponent = (props) => {
    return localStorage.getItem("isAuthenticated") === "true" ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  };

  return <Route {...rest} render={routeComponent} />;
};

export default App;
