
import React, { useState } from 'react';

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

function LsideBarSMtrends(props) {

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
                                            props.setFilterOptions(props.allFilterOptions.twitterFilterOptions.options)
                                        }}
                                    >
                                        <i className="fab fa-twitter"></i>

                                        {" "} {props.allFilterOptions.twitterFilterOptions.name}  <i className={iconPills === "1" ? "arrow right" : ""}></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "2" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("2");
                                            props.setFilterOptions(props.allFilterOptions.facebookFilterOptions.options)
                                        }}
                                    >
                                        <i className="fab fa-facebook-square"></i>
                                        {" "}{props.allFilterOptions.facebookFilterOptions.name}
                                         <i className={iconPills === "2" ? "arrow right" : ""}></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "3" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("3");
                                            props.setFilterOptions(props.allFilterOptions.instagaramFilterOptions.options)
                                        }}
                                    >
                                        <i className="fab fa-instagram"></i>
                                       {" "} {props.allFilterOptions.instagaramFilterOptions.name} <i className={iconPills === "3" ? "arrow right" : ""}></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "4" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("4");
                                            props.setFilterOptions(props.allFilterOptions.linkedInFilterOptions.options)
                                        }}
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                        {" "} {props.allFilterOptions.linkedInFilterOptions.name} <i className={iconPills === "4" ? "arrow right" : ""}></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={iconPills === "5" ? "active" : ""}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconPills("5");
                                            props.setFilterOptions(props.allFilterOptions.youTubeFilterOptions.options)
                                        }}
                                    >
                                        <i className="fab fa-youtube"></i>
                                       {" "} {props.allFilterOptions.youTubeFilterOptions.name} <i className={iconPills === "4" ? "arrow right" : ""}></i>
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
