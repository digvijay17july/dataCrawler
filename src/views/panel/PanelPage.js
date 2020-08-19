import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import PanelPageHeader from "components/Headers/PanelPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function PanelPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
  <PanelPageHeader />
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Please Choose the option</h2>
            <div className="team">
              <Row>
                   <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/search-01.jpg")}
                    ></img>
                    <h4 className="title">Search Trends</h4>
                    <p className="category text-info">Search using kewords</p>
                    <p className="description">
                     Select this option to get the details of trending search {" "}
                      < a href = "/searchTrends" >
                        links
                      </a>{" "}
                     
                    </p>
                  
                  </div>
                </Col>
                < Col md = "4" ></Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/trends-01.jpg")}
                    ></img>
                    <h4 className="title">Social Media Trends</h4>
                    <p className="category text-info">Get the trending keywords</p>
                    <p className="description">
                      Select this option to get the trending from social media{" "}
                      <a href="/socialMediaTrends" >
                        links
                      </a>{" "}
                  
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default PanelPage;
