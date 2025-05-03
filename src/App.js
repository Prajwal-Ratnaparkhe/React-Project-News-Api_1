import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import { Footer } from "./Components/Footer";
import Feedback from "./Components/Feedback";

const App = () => {

  const [country, setCountry] = useState(localStorage.getItem("country") || "us");

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("country", newCountry);
  };

  useEffect(() => {
    localStorage.setItem("country", country);
  }, [country]);

  return (
    <div>
      <Router>
      <NavBar selectedCountry={country} onCountryChange={handleCountryChange} />

        <Switch>
          <Route exact path="/">
            <News key="top" country={country} category="top" />
          </Route>
          <Route path="/education">
            {" "}
            <News key="education " country={country} category="education" />{" "}
          </Route>
          <Route path="/entertainment">
            {" "}
            <News
              key=" entertainment"
              country={country}
              category="entertainment"
            />{" "}
          </Route>
          <Route path="/health">
            {" "}
            <News key="health " country={country} category="health" />{" "}
          </Route>
          <Route path="/science">
            {" "}
            <News key=" science" country={country} category="science" />{" "}
          </Route>
          <Route path="/sports">
            {" "}
            <News key=" sports" country={country} category="sports" />{" "}
          </Route>
          <Route path="/technology">
            {" "}
            <News key="technology " country={country} category="technology" />{" "}
          </Route>

          <Route path="/world">
            {" "}
            <News key="world " country={country} category="world" />{" "}
          </Route>
          <Route path="/tourism">
            {" "}
            <News key=" tourism" country="af" category="tourism" />{" "}
          </Route>
          <Route path="/domestic">
            {" "}
            <News key=" domestic" country={country} category="domestic" />{" "}
          </Route>
          <Route path="/lifestyle">
            {" "}
            <News key="lifestyle " country={country} category="lifestyle" />{" "}
          </Route>

          <Route path="/about" component={AboutUs} />
          <Route path="/feedback">
            {" "}
            <Feedback />{" "}
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
