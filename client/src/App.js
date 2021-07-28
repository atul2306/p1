import { Route ,Switch } from "react-router-dom"
import "./App.css"

import "bootstrap/dist/css/bootstrap.css"

import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import Signup from "./component/Signup"

// ye sb logout toggle ke lie krna pd rha hai



const App=()=>{

 
  return ( 
    
   <>
   
   <Navbar/> 
   <Switch>
   <Route exact path="/"><Home/> </Route>
   <Route  path="/about"><About/></Route>
   
   
   <Route path="/contact"><Contact/> </Route>
   
   <Route path="/login"><Login/> </Route>
   <Route path="/signup"> <Signup/></Route>
 
   </Switch>
  
</>
  );
}
export default App