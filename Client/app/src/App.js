import './App.css';
import {Browserrouter as Router, Routes, Route} from "react-router-dom"

//Components import
import Navbar from "./components/Navbar"
import hamburgermenu from "./components/hamburgermenu"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Home from "./views/Home"
import TeamMission from "./views/TeamMission"
import Webshop from "./views/Webshop"
import News from "./views/News"

function App() {
  return (
    <div className="App">
   <Router>
    <hamburgerMenu/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/TeamMission" element = {<TeamMission/>} />
      <Route path = "/Webshop" element = {<Webshop/>} />
      <Route path = "/News" element = {<News/>}/>
    </Routes>

    <Navbar/>
    <Routes>

      <Route path = "/" element = {<}

    </Routes>
   </Router>


    </div>
  );
}

export default App;
