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

import Sidebar2 from "../components/sidebar";

function Materials() {
  return (
    <div>
      <Row>
        <Col  lg={2} className="d-flex">
        <Sidebar2/>
        </Col>
        <Col>
        
          </Col>
      </Row>
    </div>
  );
}

export default Materials;
