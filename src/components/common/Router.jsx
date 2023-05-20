import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Staking from "../../pages/Staking";
import LockUp from "../../pages/LockUp";
import Swap from "../../pages/Swap";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:staking" element={<Staking />} />
        <Route path="swap" element={<Swap />} />
        <Route path="/lockup/:staking" element={<LockUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
