import React from "react";
import { Outlet } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import AuthNavbar from "./navbar/AuthNavbar";


const jwt = require("jsonwebtoken");

require("dotenv").config();

/* It checks if the token is valid and if it is, it decodes it and attaches the decoded token to the request object */
const verifyToken = (req, res, next) => {
  const token = String(req.headers.authorization)
    .replace(/^bearer|^jwt/i, "")
    .replace(/^\s+|\s+$/gi, "");

  try {
    if (!token) {
      return res.status(403).json({
        statusCode: 403,
        msg: "A token is required for authentication",
      });
    }
    /* Verifying the token. */
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userData = decoded;
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      msg: "Invalid Token",
    });
  }
  return next();
};

module.exports = verifyToken;


const Auth = () => {
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
            <AuthFooter />
        </React.Fragment>
    );
}
export default Auth;