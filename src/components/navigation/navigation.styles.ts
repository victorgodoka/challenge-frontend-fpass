import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0;

  & ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 8px 24px;
  }
`;

export const NavLink = styled(Link)`
  background-color: #fff;
  border: solid 2px #000;
  color: #000;
  margin: 0;
  padding: 3px 10px;
  transform: skew(-15deg);
  display: inline-block;
  font-size: 1.455rem;
  text-decoration: none;

  &:hover {
    background-color: #000;
    border: solid 2px #fff;
    color: #fff;
  }
`;
