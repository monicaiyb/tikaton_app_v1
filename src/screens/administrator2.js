import React from "react";

import {
  Row,
  Col, 
} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faPlus,
 
//   faCheck,
//   faSearch,
//   faSlidersH,
// } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Sidebar2 from "../components/sidebar";
import Dashboard from "../components/material/Dashboard"
import Dashboard1 from "../components/material/dashnew"
function Adminstrator() {
  return (
    <div className="dashboard">
      <Row>
        <Col   className="side-menu" sm={4}>
        <Sidebar2/>
        </Col>
        <Col className="data-display" sm={8}>
        {/* <Dashboard/> 
        <Router>
        <Switch>
         <Route path={"admin/dash"} component={Dashboard}/>
         <Route path={"admin/dash1"} component={Dashboard1}/>
        </Switch>
        </Router> */}
            {/* <Dashboard/> */}
          </Col>
      </Row>
    </div>
  );
}

export default Adminstrator;
