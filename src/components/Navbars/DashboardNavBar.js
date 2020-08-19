import React from "react";

// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

function DashboardNavbar() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    return (
        <>
            <div className="section section-navbars">
                <Container id="menu-dropdown">

                </Container>
                <div id="navbar">

                    <Navbar className="bg-info" expand="lg">
                        <Container>
                            <div className="navbar-translate">
                                <NavbarBrand
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Home
                  </NavbarBrand>
                                <button
                                    onClick={() => {
                                        document.documentElement.classList.toggle("nav-open");
                                        setCollapseOpen(!collapseOpen);
                                    }}
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    type="button"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <Collapse isOpen={collapseOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem className="active">
                                        <NavLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <p>Discover</p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <p>Profile</p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <p>Settings</p>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>

            </div>
        </>
    );
}

export default DashboardNavbar;
