import { createContext, useState } from "react";
import "./App.css";
import SbdcRoute from "./Components/Router/sbdc/SbdcRoute";
import SfdcRoute from "./Components/Router/sfdc/SfdcRoute";
import Navigation from "./Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import SbdcRegistration from "./Components/Router/sbdc/SbdcRegistration/SbdcRegistration";
import SFDCRegistration from "./Components/SFDCRegistration/SFDCRegistration";
import Home from "./Components/Home/Home";
import InfoBar from "./Components/Home/InfoBar";
import LogoBar from "./Components/Home/LogoBar";
import HomePartnersForm from "./Components/Home/HomePartnersForm";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Shared/PrivateRouter/PrivateRouter";
import Profile from "./Components/Shared/Profile/Profile";

export const AuthContext = createContext();

function App() {
  const [userDetails, setUserDetails] = useState({ app_id: "" });

  return (
    <div className="App">
      <AuthContext.Provider value={[userDetails, setUserDetails]}>
        <Router>
          <ScrollToTop />
          <Navigation />
          <Switch>
            <Route exact path="/sbdc">
              <SbdcRoute />
            </Route>
            <Route exact path="/sfdc">
              <SfdcRoute />
            </Route>
            <Route exact path="/sbdc-registration">
              {/* <SbdcRegistration /> */}
              <Redirect to="/" />
            </Route>
            <Route exact path="/sfdc-registration">
              <SFDCRegistration />
              {/* <Redirect to="/" /> */}
            </Route>
            <Route exact path="/login">
              <Login />
              {/* <Redirect to="/" /> */}
            </Route>
            <PrivateRoute exact path="/profile/:id">
              <Profile />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
              <InfoBar />
              <LogoBar />
              <HomePartnersForm />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
