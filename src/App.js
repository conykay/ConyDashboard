import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId' >
            <User />
          </Route>
          <Route path='/newUser' >
            <NewUser />
          </Route>
          <Route path='/products' >
            <Products />
          </Route>
          <Route path='/product/:productId' >
            <Product />
          </Route>
          <Route path='/newProduct' >
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
