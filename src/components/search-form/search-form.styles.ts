import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 24px;
  max-width: 640px;
  height: calc(100vh - 90px);
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

export const SearchWrapper = styled.form`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  background-color: #fff;
  border: solid 2px #000;
  color: #000;
  width: 100%;
  max-width: 600px;
  width: 100%;
  padding: 24px 12px;
  transform: skew(8deg);
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #f00;
  border: solid 2px #000;
  color: #000;
  width: 100%;
  max-width: 120px;
  width: 100%;
  padding: 8px 3px;
  transform: skew(8deg);
  font-size: 1.6rem;
  z-index: 10;
  cursor: pointer;
  position: absolute;
  right: 50px;
  bottom: -20px;

  &:hover {
    background-color: #fff;
    border: solid 2px #f00;
    color: #f00;
  }
`;

export const Checkbox = styled.label`
  display: block;
  position: relative;
  padding-left: 42px;
  margin: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  text-shadow: 2px -1px 1px #000;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-color: #eee;
    border: 2px solid #000;
    transform: skew(6deg);
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ span {
    transform: skew(-6deg);
    background-color: #f00;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  & input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

