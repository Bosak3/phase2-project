import { NavLink } from "react-router-dom" 

const linkStyles = {
    display: "inline-block",
    width: "inline-block",
    padding: "12px",
    margin:"0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color:"white",
  };

function NavBar() {

    return(
      <div>
        <NavLink exact to="/" style={linkStyles} activeStyle={{background: "darkblue",}}>Profile</NavLink>
        <NavLink exact to="/programmerlist" style={linkStyles} activeStyle={{background: "darkblue",}}>Programmer List</NavLink>
        <NavLink exact to="/matches" style={linkStyles} activeStyle={{background: "darkblue",}}>Matches</NavLink>
        
  
        
      </div>
    )
  }

  export default NavBar