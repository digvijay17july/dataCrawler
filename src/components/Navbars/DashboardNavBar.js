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
                                    href="/panel"
                                    
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
                                            <p>Social Media Panel</p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/profile-page"
                                           
                                        >
                                            <p>Profile</p>
                                        </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle
                                            caret
                                            color="default"
                                            href="#pablo"
                                            nav
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i
                                                aria-hidden={true}
                                                className="now-ui-icons ui-1_settings-gear-63"
                                            ></i>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem header tag="a">
                                                Dropdown header
                          </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Action
                          </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Another action
                          </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Something else here
                          </DropdownItem>
                                            <div className="divider"></div>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Separated link
                          </DropdownItem>
                                            <div className="divider"></div>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                One more separated link
                          </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

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
