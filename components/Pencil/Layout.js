// components/Layout.js
import React from "react";
import Content from "./Content";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-grow">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
