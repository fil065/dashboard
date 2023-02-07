import React from "react";
import { ButtonSideBar, Nav } from "./style";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Nav>
      <ButtonSideBar>
        <MenuIcon />
      </ButtonSideBar>
    </Nav>
  );
};

export default NavBar;
