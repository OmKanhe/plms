const express = require('express');
const cors = require('cors');
const { registerOwner, labProfile, loginOwner } = require('../controller/postControllers');
const allLabOwners = require('../controller/getControllers');

const route = express.Router();

route.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

route.post("/register", registerOwner);
route.get("/registered-owners", allLabOwners);
route.post("/lab_profile", labProfile);
route.post("/login", loginOwner);

module.exports = {route}