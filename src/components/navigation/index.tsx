import { NavigationWrapper, NavLink } from "./navigation.styles";

const Navigation = () => {
  return <NavigationWrapper>
    <ul>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/listing">Listing</NavLink>
    </ul>
  </NavigationWrapper>
}

export default Navigation;
