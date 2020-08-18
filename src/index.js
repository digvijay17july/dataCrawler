
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/login/LoginPage.js";
import PanelPage from "views/panel/PanelPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUpPage from "views/signUp/SignUpPage.js";
import AboutUsPage from "views/aboutUs/AboutUs.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/aboutus"
          render={(props) => <AboutUsPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/signup"
          render={(props) => <SignUpPage {...props} />}
        />
        <Route
          path="/panel"
          render={(props) => <PanelPage {...props} />}
        />
        <Redirect to="/login" />
        <Redirect from="/" to="/login" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
