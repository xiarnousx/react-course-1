import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
