import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

import BaseLayout from "../Layout/baseLayout";
import Home from "../Modules/Home/home.jsx";

/* ENCRYPT LIST */
import EncryptList from "../Modules/Encrypt/encryptList.jsx";


export default createRoutesFromElements(
  <Route exact path="/" element={<BaseLayout />}>
    <Route index path="" element={<Home />} />

    <Route index path='/encryptlist' element={<EncryptList />} />
  </Route>
);
