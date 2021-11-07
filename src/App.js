import "./App.css";
import SbdcRoute from "./Components/Router/sbdc/SbdcRoute";
import SfdcRoute from "./Components/Router/sfdc/SfdcRoute";
import Navigation from "./Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import SbdcRegistration from "./Components/Router/sbdc/SbdcRegistration/SbdcRegistration";
import SFDCRegistration from "./Components/SFDCRegistration/SFDCRegistration";
import Home from "./Components/Home/Home";
import InfoBar from "./Components/Home/InfoBar";
import LogoBar from "./Components/Home/LogoBar";
import HomePartnersForm from "./Components/Home/HomePartnersForm";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/sbdc">
                        <SbdcRoute />
                    </Route>
                    <Route exact path="/sfdc">
                        <SfdcRoute />
                    </Route>
                    <Route exact path="/sbdc-registration">
                        <SbdcRegistration />
                    </Route>
                    <Route exact path="/sfdc-registration">
                        <SFDCRegistration />
                    </Route>
                    <Route exact path="/">
                        <Home />
                        <InfoBar />
                        <LogoBar />
                        <HomePartnersForm />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
