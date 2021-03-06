import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./redux/types";
import { getUserData } from "./redux/actions/userActions";
//axios
import axios from "axios";
import { FBIdToken } from "./constants/localStorage";
//
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Admin from "./Pages/Admin/Admin";
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import "./App.css";
import ProductTab from "./components/AdminDashboardMenu/ProductTab/ProductTab";
import OrderTab from "./components/OrderTab/OrderTab";
import AddProduct from "./components/AddProduct/AddProduct";
axios.defaults.baseURL =
  "https://asia-east2-aware-ecommerce-87f05.cloudfunctions.net/api";

const App = () => {
  useEffect(() => {
    let token = localStorage.getItem(FBIdToken);
    if (token) {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserData());
    } else {
      store.dispatch({ type: SET_UNAUTHENTICATED });
    }
    return () => {};
  });
  return (
    <Provider store={store}>
      {/* <Router> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/product/:name" component={ProductDetails} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/dashboard" component={AdminDashboard}>
          {/* {authenticated ? <AdminDashboard /> : <Redirect to="/admin" />} */}
        </Route>
        <Route  path="/admin/dashboard/products" component={ProductTab} />
        <Route exact path="/admin/dashboard/orders" component={OrderTab} />
        <Route exact path="/admin/dashboard/add-product" component={AddProduct} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      {/* </Router> */}
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default App;
