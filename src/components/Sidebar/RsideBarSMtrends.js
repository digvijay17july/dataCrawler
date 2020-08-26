import React from "react";
import { Link } from "react-router-dom";
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
    UncontrolledTooltip,
    Card,
    CardHeader,
    CardBody
} from "reactstrap";

function RsideBarSMtrends() {

    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [iconPills, setIconPills] = React.useState("1");
    return (
        <>
            < section className="section-full-screen " >
                <Container fluid>
                    <Card  >
                        <h4 className="title text-center ">Graph Filters</h4>
                        < CardHeader className="section-full-screen " >

                            <Nav className="justify-content-left" role="tablist" tabs>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "1" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("1");
                                        }}
                                    >
                                        <i className="now-ui-icons objects_umbrella-13"></i>
                        #HashTags
                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "2" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("2");
                                        }}
                                    >
                                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Topics
                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "3" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("3");
                                        }}
                                    >
                                        <i className="now-ui-icons shopping_shop"></i>
                        Trends
                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "4" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("4");
                                        }}
                                    >
                                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Demographics
                      </NavLink>
                                </NavItem>
                            </Nav>
                        </CardHeader>
                    </Card>

                </Container>

            </ section>
        </>
    );
}
export default RsideBarSMtrends;
