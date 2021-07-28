import { NavLink } from "react-router-dom";
import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.css"


const Navbar = () => {
  const [state, setstate] = useState(0)
  const come=()=>{
      setstate(state+1);
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top ">
        <NavLink className="navbar-brand" to="#"></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-end">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link" to="/contact">Contact</button>
          </li>
         <li className="nav-item">
              <button onClick={come} className="nav-link" to="/login">Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" to="/signup">Registration {state}</button>
            </li>
          </ul>
        </div>
      </nav> 

    </>
  );
}
export default Navbar