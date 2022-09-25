import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dragons from './components/dragons/Dragons';
import DragonDetails from './components/dragon-details/DragonDetails';
import Login from './components/login/Login'
import SignUp from './components/sign-up/SignUp';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/Auth';
import PrivateRoute from './PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route index element={<Dragons />} />
          <Route path="details/:dragonId" element={<DragonDetails />} />
        </Route>
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
