import React, { useState } from 'react';
import Datetime from "react-datetime";

// reactstrap components
import {
    Button,
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
    FormGroup,
    Input,
} from "reactstrap";

// core components
import DashboardNavBar from "components/Navbars/DashboardNavBar.js";
import LeftSideBar from "components/Sidebar/LsideBarSMtrends.js";
import RightSideBar from "components/Sidebar/RsideBarSMtrends.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import BarChart from "components/charts/BarChart.js"
import LineChart from "components/charts/LineChart.js"
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
function SocialMediaTrendsPage() {

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

    const searchOptions = (type) => {
        switch (type) {
            case "DatePicker": return ((<div  className="datepicker-container">
                <hr></hr>
                <FormGroup>
                    <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Choose Date" }}
                    />
                </FormGroup>
                    <FormGroup>
                    <Input
                        defaultValue=""
                        placeholder="Search"
                        type="text"
                    ></Input>
                    </FormGroup>
                <FormGroup>
                    <Button className="btn-round" color="default" type="button">
                        Search
              </Button>
                </FormGroup>
                <hr></hr>
            </div>));
                break;
        }
    }
    const twitterFilterOptions = {
        options: [{
            key: "1", value: "#tags", searchOptions: searchOptions("DatePicker")
        }, { key: "2", value: "#trends", searchOptions: searchOptions("DatePicker") }],
        name: "Twitter", icon:"fab fa-twitter"
    }
    const facebookFilterOptions = {
        options: [{ key: "1", value: "#posts", searchOptions: searchOptions("DatePicker") }, { key: "2", value: "#trendingPages", searchOptions: searchOptions("DatePicker") }],
        name: "Facebook", icon: "fab fa-facebook-square"
    }
    const linkedInFilterOptions = {
        options: [{ key: "1", value: "#posts", searchOptions: searchOptions("DatePicker") }, { key: "2", value: "#trendingPosts", searchOptions: searchOptions("DatePicker") }],
        name: "LinkedIn", icon: "fab fa-linkedin-in"
    }
    const instagaramFilterOptions = {
        options: [{ key: "1", value: "#tags", searchOptions: searchOptions("DatePicker") }, { key: "2", value: "#posts", searchOptions: searchOptions("DatePicker") }, { key: "3", value: "#trendingPosts", searchOptions: searchOptions("DatePicker") }],
        name: "Instagaram", icon: "fab fa-instagram"
    }
    const youTubeFilterOptions = {
        options: [{ key: "1", value: "#videos", searchOptions: searchOptions("DatePicker") }, { key: "2", value: "#trailers", searchOptions: searchOptions("DatePicker") }, { key: "3", value: "#trendingVideos", searchOptions: searchOptions("DatePicker") }],
        name: "Youtube", icon: "fab fa-youtube"
    }

    const allFilterOptions = {
        instagaramFilterOptions: instagaramFilterOptions,
        linkedInFilterOptions: linkedInFilterOptions,
        facebookFilterOptions: facebookFilterOptions,
        twitterFilterOptions: twitterFilterOptions,
        youTubeFilterOptions: youTubeFilterOptions
    }
   
    const [filterOptions, setFilterOptions] = useState(twitterFilterOptions)
    const div2PDF = (e,id) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName(id)[0]

        html2canvas(input).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const pdf = new pdfConverter("l", "pt");
            pdf.addImage(
                img,
                "png",
                input.offsetLeft-20,
                input.offsetTop-20,
                input.clientWidth-20,
                input.clientHeight-20
            );
            pdf.save("chart.pdf");
            // but.style.display = "block";
        });
    };
    return (
        <>
            <DashboardNavBar />

            < section className="section-full-screen" >

                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <LeftSideBar allFilterOptions={allFilterOptions} setFilterOptions={setFilterOptions} />

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
                                                   
                                                  
                                                    <div className="iconPills1">
                                                        <BarChart dataOne={dataOne} optionsOne={optionsOne} />
                                                    </div>
                                                    <FormGroup className="text-center">
                                                        <Button onClick={e => div2PDF(e, "iconPills1")}>Export As PDF</Button>
                                                        </FormGroup>
                                                </TabPane>
                                                <TabPane tabId="iconPills2">
                                                    <div className="iconPills2">
                                                        <LineChart className="iconPills2" dataTwo={dataTwo} optionsTwo={optionsTwo} />
                                                        </div>
                                                    <FormGroup className="text-center">
                                                        <Button onClick={e => div2PDF(e, "iconPills2")}>Export As PDF</Button>
                                                    </FormGroup>
                                                </TabPane>
                                                <TabPane tabId="iconPills3">
                                                    <div className="iconPills3">
                                                        <LineChart className="iconPills3" dataTwo={dataTwo} optionsTwo={optionsTwo} />
                                                        </div>
                                                    <FormGroup className="text-center">
                                                        <Button onClick={e => div2PDF(e, "iconPills3")}>Export As PDF</Button>
                                                    </FormGroup>
                                                </TabPane>
                                                <TabPane tabId="iconPills4">
                                                    <div className="iconPills4">
                                                        <BarChart className="iconPills4" dataOne={dataOne} optionsOne={optionsOne} />
                                                        </div>
                                                    <FormGroup className="text-center">
                                                        <Button onClick={e => div2PDF(e, "iconPills4")}>Export As PDF</Button>
                                                    </FormGroup>
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>

                                </Container>
                            </div>
                        </Col>
                        <Col md={2}>
                            <RightSideBar filterOptions={filterOptions} optionsHeading/>
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

export default SocialMediaTrendsPage;
