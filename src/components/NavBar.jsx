import React from "react";
import "../App.css";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar({ setToken }) {
  const state = useSelector((state) => state.handleCart);
  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <header>
      <Navbar className="bg-main rounded-bottom shadow-lg">
        <Container>
          <NavLink to="/" className="fw-bold text-white text-decoration-none fs-4">
            E-Commerce
          </NavLink>
          <Form>
            <Form.Group>
              <div className="icon-inside d-none d-md-block ">
                <i>
                  <BiSearchAlt style={{ width: "20px", height: "20px" }} />
                </i>
                <input type="search" placeholder="Search..." className="custom-search" />
              </div>
              <Button type="submit" className="visually-hidden"></Button>
            </Form.Group>
          </Form>
          <Nav className="justify-end align-items-center gap-3">
            <NavLink to="/cart" className="position-relative">
              <BsCartFill style={{ width: "2rem", height: "2rem" }} className="text-dark" />
              {state.length === 0 ? <span></span> : <span class="position-absolute top-4 start-99 translate-middle badge rounded-pill bg-danger">{state.length}</span>}
            </NavLink>
            <NavLink to="/">
              <Button className="button-secondary" onClick={logoutHandler}>
                Logout
              </Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
