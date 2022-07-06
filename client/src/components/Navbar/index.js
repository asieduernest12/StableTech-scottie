import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";

const Navbar = () => {
return (
  <>
  <Nav>
    <NavMenu>
    <NavLink to="/Sign-In" activeStyle>
      Sign In
    </NavLink>
    <NavLink to="/View Horses" activeStyle>
      View Horses
    </NavLink>
    <NavLink to="/View Schedule" activeStyle>
      View Schedule
    </NavLink>
    </NavMenu>
  </Nav>
  </>
);
};

export default Navbar;
