/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Data Crawler
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="#"
            target="_blank"
          >
            Crawlers
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
