import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

import BaseLayout from "../Layout/baseLayout";
import Home from "../Modules/Home/home.jsx";

/* ENCRYPT LIST */
import EncryptList from "../Modules/Encrypt/encryptList.jsx";
import GelbckeEncryption from "../Modules/Encrypt/GelbckeEncryption/gelbckeEncryption";
import Anagram from "../Modules/Encrypt/Anagram/anagram";
import Symmetric from "../Modules/Encrypt/SymmetricEncryption/symmetricEncryption";

export default createRoutesFromElements(
  <Route exact path="/" element={<BaseLayout />}>
    <Route index path="" element={<Home />} />

    {/* Encryption */}
    <Route path="/encryptlist" element={<EncryptList />} />
    <Route path="/gelbckeencryption" element={<GelbckeEncryption />} />
    <Route path="/anagram" element={<Anagram />} />
    <Route path="/symmetric" element={<Symmetric />} />
  </Route>
);
