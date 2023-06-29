import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

import BaseLayout from "../Layout/baseLayout";
import Home from "../Modules/Home/home.jsx";

/* ENCRYPT LIST */
import EncryptList from "../Modules/Encrypt/encryptList.jsx";
import GelbckeEncryption from "../Modules/Encrypt/GelbckeEncryption/gelbckeEncryption";

export default createRoutesFromElements(
  <Route exact path="/" element={<BaseLayout />}>
    <Route index path="" element={<Home />} />

    {/* Encryption */}
    <Route index path="/encryptlist" element={<EncryptList />} />
    <Route index path="/gelbckeencryption" element={<GelbckeEncryption />} />
  </Route>
);
