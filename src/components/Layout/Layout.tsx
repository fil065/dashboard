import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { DashBoardWrapper } from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <DashBoardWrapper>
        <SideBar />
        <div>{children}</div>
      </DashBoardWrapper>
    </>
  );
};

export default Layout;
