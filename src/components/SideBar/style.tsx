import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.h2`
  padding: 1rem;
  text-align: center;
`;

export const UnorderedListStyled = styled.ul`
  list-style: none;
  padding: 0 1rem;
`;

export const ListItemStyled = styled.li`
  padding: 0.5rem;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
