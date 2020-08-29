import React, { useState } from "react";
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


function RsideBarSMtrends(props) {

    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [iconPills, setIconPills] = React.useState("1");

    const changeFilterIconPill = (pillPosition) => {
        console.log("updated pill positions: " + pillPosition)

    }
    function ListItem(props) {

        return (<NavItem><NavLink className={iconPills === props.index ? "active" : ""} onClick={(e) => { e.preventDefault(); setIconPills(props.index) }} href="#pablo"> {props.value}</NavLink>{iconPills === props.index ?props.searchOptions:null} </NavItem>);
    }
    console.log("filter options are :" + (props.filterOptions.options))
    const listItems = [];
    props.filterOptions.options.forEach((item, index) => {
        listItems.push(<ListItem index={item.key} key={item.key} value={item.value} searchOptions={item.searchOptions} />)
    });



    return (
        <>
            < section className="section-full-screen " >
                <Container fluid>
                    <Card  >
                     
                        <h4 className="text-center">Filter Options <span class="mr-1 badge badge-default"> <i className={props.filterOptions.icon}></i> {props.filterOptions.name}</span></h4>
                        < CardHeader className="section-full-screen " >
<hr></hr>
                            <Nav className="justify-content-left" role="tablist" tabs>
                                {listItems}
                                {/* <NavItem>
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
                                </NavItem> */}
                                {/* <NavItem>
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
                                </NavItem> */}
                            </Nav>
                        </CardHeader>
                    </Card>

                </Container>

            </ section>
        </>
    );
}
export default RsideBarSMtrends;
