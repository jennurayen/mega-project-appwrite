import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./style/style";
import { Navbar, Footer } from "./components/components";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((userData) => {
        if (userData) {
          dispath(login({ userData }));
        } else {
          dispath(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : null;
}

export default App;
