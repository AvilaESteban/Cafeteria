import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../crudBasico.css";
import "./footer.css";

const Header = () => {
  return (
    <>
      <Navbar variant="" expand="lg" className="fixed-top body-fo">
        <h7 className="text-light">Cafeteria Break</h7>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <div className="d-flex  ">
            <NavLink
              exact={true}
              to="/"
              className="nav-link text-light "
              activeClassName="active"
            >
              {" "}
              Inicio
            </NavLink>
            <NavLink
              exact={true}
              to="/productos"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Productos
            </NavLink>
            <NavLink
              exact={true}
              to="/productos/nuevo"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Agregar Productos
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
