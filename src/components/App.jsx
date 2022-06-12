import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApplicationsPage from "./ApplicationsPage/ApplicationsPage";
import FooterSec from "./Footer/FooterSec";
import Header from "./Header/Header";
import Home from "./Home/Home";
import NoMatch from "./NoMatch/NoMatch";
import OrdersPage from "./OrdersPage/OrdersPage";
import Product from "./ProductPage/Product";
import ProfilePage from "./ProfilePage/ProfilePage";
import SideNav from "./SideNav/SideNav";
import TransactionsPage from "./TransactionsPage/TransactionsPage";

const App = () => {
  return (
    <div className="App">
      <SideNav />
      <Header />
      <Routes>
          <Route  index element={<Home />} />
          <Route path="m/profile" element={<ProfilePage />} />
          <Route path="m/products" element={<Product />} />
          <Route path="m/orders" element={<OrdersPage />} />
          <Route path="m/applications" element={<ApplicationsPage />} />
          <Route path="m/transactions" element={<TransactionsPage />} />

          {/* Error Page */}
          <Route path="*" element={<NoMatch />} />

      </Routes>

      <div className="footer">
          <FooterSec />
      </div>
    </div>
  );
};

export default App;
