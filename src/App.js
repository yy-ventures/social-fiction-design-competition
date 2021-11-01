import "./App.css";
import SbdcRoute from "./Components/Router/sbdc/SbdcRoute";
import SfdcRoute from "./Components/Router/sfdc/SfdcRoute";
import Navigation from "./Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import SbdcRegistration from "./Components/Router/sbdc/SbdcRegistration/SbdcRegistration";
import Home from "./Components/Home/Home";
import InfoBar from "./Components/Home/InfoBar";
import LogoBar from "./Components/Home/LogoBar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/sbdc">
                        <SbdcRoute />
                    </Route>
                    <Route path="/sfdc">
                        <SfdcRoute />
                    </Route>
                    <Route path="/sbdc-registration">
                        <SbdcRegistration />
                    </Route>
                    <Route path="/">
                        <Home />
                        <InfoBar />
                        <LogoBar />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
