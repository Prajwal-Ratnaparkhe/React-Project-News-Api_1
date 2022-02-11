import './App.css';
import React from "react";
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import { Footer } from './Components/Footer';
import Feedback from './Components/Feedback';




const App = () => {

  return (
    <div>
        
      <Router>
        <NavBar />
        <Switch>
          
          <Route exact path="/"><News key="general"  pageSize={11} country="in" category="general" /></Route>
          <Route path="/business"> <News key="business "  pageSize={11} country="in" category="business" /> </Route>
          <Route path="/entertainment"> <News key=" entertainment"  pageSize={11} country="in" category="entertainment" /> </Route>
          <Route path="/health"> <News key="health "  pageSize={11} country="in" category="health" /> </Route>
          <Route path="/science"> <News key=" science"  pageSize={11} country="in" category="science" /> </Route>
          <Route path="/sports"> <News key=" sports"  pageSize={11} country="in" category="sports" /> </Route>
          <Route path="/technology"> <News key="technology "  pageSize={11} country="in" category="technology" /> </Route>
          <Route  path='/about' component={AboutUs} />  
          <Route  path='/feedback' > <Feedback/> </Route>  
        
        </Switch>

      </Router>
      <Footer />

    </div>
  )

}

export default App