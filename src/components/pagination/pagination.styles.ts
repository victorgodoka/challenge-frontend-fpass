import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transform: skew(6deg);
  width: 90vw;
  margin: 18px auto;
  & li {
    width: auto;
    margin: 6px auto;
    padding: 3px 10px;
    background-color: #fff;
    border: solid 2px #000;
    color: #000;

    &:hover {
      background-color: #000;
      border: solid 2px #fff;
      color: #fff;
    }
  }
`;
