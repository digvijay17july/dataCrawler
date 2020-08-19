import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import DashboardNavBar from "components/Navbars/DashboardNavBar.js";
import LeftSideBar from "components/Sidebar/LsideBarSMtrends.js";
import RightSideBar from "components/Sidebar/RsideBarSMtrends.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import BarChart from "components/charts/BarChart.js"
import LineChart from "components/charts/LineChart.js"
function SearchTrendsPage() {

    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");

    const dataOne = {
        labels: ["#Corona", "#Asia", "#Europe", "#Latin America", "#North America"],
        datasets: [{
            label: "Tweets (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
        }]
    }
    const dataTwo = {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
        }, {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
        }]
    }



    const optionsOne = {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Tweets (millions) in 2020'
        }
    }
    const optionsTwo = {
        title: {
            display: true,
            text: 'Tweets (millions) in 2020'
        }
    }

    return (
        <>
            <DashboardNavBar />

            < section className="section-full-screen" >

                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <LeftSideBar />

                        </Col>
                        <Col md={8}>
                            <div className="text-center">
                                <Container >
                                    < Card className=" section-full-screen" >
                                        <CardHeader>
                                            <Nav className="justify-content-center" role="tablist" tabs>
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
                        Trends Across Wrold
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
                        Trends Accross India
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
                        Trends For Business One
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
                        Trends For Business Two
                      </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </CardHeader>
                                        <CardBody>
                                            <TabContent
                                                className="text-center"

                                                activeTab={"iconPills" + iconPills} >
                                                <TabPane tabId="iconPills1">
                                                    <BarChart dataOne={dataOne} optionsOne={optionsOne} />

                                                </TabPane>
                                                <TabPane tabId="iconPills2">

                                                    <LineChart dataTwo={dataTwo} optionsTwo={optionsTwo} />
                                                </TabPane>
                                                <TabPane tabId="iconPills3">
                                                    <LineChart dataTwo={dataTwo} optionsTwo={optionsTwo} />
                                                </TabPane>
                                                <TabPane tabId="iconPills4">
                                                    <BarChart dataOne={dataOne} optionsOne={optionsOne} />
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>

                                </Container>
                            </div>
                        </Col>
                        <Col md={2}>
                            <RightSideBar />
                        </Col>
                    </ Row>
                    <Row>
                        <div className="section-space"></div>
                    </Row>

                </Container>

                <DefaultFooter />

            </section>

        </>
    );
}

export default SearchTrendsPage;
