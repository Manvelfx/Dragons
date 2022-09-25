import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./context/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = useContext(AuthContext);
  console.log("🚀 ~ PrivateRoute ~ auth", auth)
  return (
    !!auth.currentUser ? <Outlet /> : <Navigate to="/login" />
  );
};


export default PrivateRoute;