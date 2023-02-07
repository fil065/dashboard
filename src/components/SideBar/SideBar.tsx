import React from "react";
import styled from "styled-components";
import { LinkStyled, ListItemStyled, Logo, UnorderedListStyled } from "./style";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideBarContainer = styled.div`
  width: 20%;
  height: 100vh;
  background-color: lightgray;
  border-right: 1px solid black;
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      {/* <Logo src={} alt='logo'></Logo> */}
      <Logo>SPACEDASH</Logo>
      <hr />
      <UnorderedListStyled>
        <ListItemStyled>
          <LinkStyled to="/">
            <DashboardIcon />
            <span>DashBoard</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/todo">
            <FormatListBulletedIcon />
            <span>Todo</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/contacts">
            <GroupIcon />
            <span>Contacts</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/notes">
            <TextSnippetIcon />
            <span>Notes</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/weather">
            <ThermostatIcon />
            <span>Weather</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/music">
            <PlayCircleIcon />
            <span>Music</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/calendar">
            <CalendarMonthIcon />
            <span>Calendar</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/crypto">
            <CurrencyBitcoinIcon />
            <span>Crypto</span>
          </LinkStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkStyled to="/chat">
            <ChatIcon />
            <span>Chat</span>
          </LinkStyled>
        </ListItemStyled>
      </UnorderedListStyled>
    </SideBarContainer>
  );
};

export default SideBar;
