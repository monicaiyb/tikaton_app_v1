import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBackward, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import SideBarData  from '../components/material/SidenavData';

const Sidebar2 = () => {
  return (
    <div className="side-menu">
      <div className="top-menu">
        <div className="logo">
          <h3>Tikaton</h3>
        </div>          
      </div>
      <div className="bottom-menu">
      <ul>
          {SideBarData.map((val,key)=>{
              return(
                <li key={key}onClick={()=>{
                    window.location.pathname=val.itemId
                }}>
                    {""}
                    <div>{val.elemBefore}</div>
                    <div>{val.title}</div>
                </li>
              )
          })
        }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar2;
