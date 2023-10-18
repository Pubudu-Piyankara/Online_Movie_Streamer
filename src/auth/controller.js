const jwt = require('jsonwebtoken');

require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const login = (req, res) => {
    const { email, password } = req.body;
    
    if (email === EMAIL && password === PASSWORD) {
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
        });
        res.json({
        message: 'Login successful',
        token,
        });
    } else {
        res.status(401).json({
        message: 'Invalid credentials',
        });
    }
    }

module.exports = login;
// Compare this snippet from src/auth/Register.js:
// import axios from "axios";
// import React from "react";
// import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// const Register = () => {
    