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

function LsideBarSMtrends() {

    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [iconPills, setIconPills] = React.useState("1");
    return (
        <>
            < section  >
                <Container >
                    <Card  >
                        <h4 className="title text-center">Social Media</h4>
                        < CardHeader className="section-full-screen pb-2" >
                            
                            <Nav className="justify-content-right" role="tablist" tabs>
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
                                       
                        Twitter  <i className={iconPills === "1" ? "arrow right" : ""}></i>
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
                        Facebook  <i className={iconPills === "2" ? "arrow right" : ""}></i>
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
                        Instagaram <i className={iconPills === "3" ? "arrow right" : ""}></i>
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
                        Linkedin <i className={iconPills === "4" ? "arrow right" : ""}></i>
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
export default LsideBarSMtrends;
