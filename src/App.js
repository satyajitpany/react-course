//import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import About   from "./About";
import { Contact } from "./Contact";
import { Users } from "./Users";
import { Home } from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateUser } from "./CreateUser";
import {Nav,Navbar} from 'react-bootstrap';
import {Link,Route,Switch, BrowserRouter as Router} from 'react-router-dom'
function App() {
  //const[name,setName]=useState("Anil");
  return (
    
    <div className="App">
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><Link to="/">Home</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/users">User List</Link></Nav.Link>
<Nav.Link href="#pricing"><Link to="/createuser">Create User</Link></Nav.Link>
    </Nav>
  </Navbar>
      <h1>Home</h1>
      
      {/* <About name={name}/> */}

      {/* <Contact name={name}/> */}
      {/* <button onClick={()=>setName("Pany Family")}>Update Name</button> */}
      {/* <Users /> */}
      {/* <CreateUser /> */}
      
      <Switch>
      
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      
    </Router>
   
    </div> 
  );
}

export default App;
