import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  
  faUser,
 
} from "@fortawesome/free-solid-svg-icons";

const SideData = [
        {
          title: "Dashboard",
          itemId: "/materials/dash",
          // you can use your own custom Icon component as well
          // icon is optional
          elemBefore: () => <FontAwesomeIcon name="inbox" icon={faHome} />,
        },
        {
          title: "Material",
          itemId: "/material",
          elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
          subNav: [
            {
              title: "New Materials",
              itemId: "/materials/AddNew",
            },
            {
              title: "Material List",
              itemId: "/materials/Lists",
            },
            {
              title: "Material History",
              itemId: "/materials/History",
            },
          ],
        },
        {
          title: "Products",
          itemId: "/products",
          elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
          subNav: [
            {
              title: "New Products",
              itemId: "/products/AddNew",
            },
            {
              title: "Products List",
              itemId: "/products/Lists",
            },
            {
              title: "Products History",
              itemId: "/products/History",
            },
          ],
        },
        {
          title: "Supplier",
          itemId: "/suppliers",
          elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
          subNav: [
            {
              title: "New Products",
              itemId: "/Supplier/AddNew",
            },
            {
              title: "Supplier List",
              itemId: "/Supplier/Lists",
            },
                        
          ],
        },
        {
          title: "Sales",
          itemId: "/sales",
          subNav: [
            {
              title: "New Sales",
              itemId: "/saless/AddNew",
            },
            
            {
              title: "Sales History",
              itemId: "/sales/History",
            },
          ],
        },
        {
          title: "Location",
          itemId: "/location",
          subNav: [
            {
              title: "New Location",
              itemId: "/location/AddNew",
            },
            
            {
              title: "Location History",
              itemId: "/location/List",
            },
          ],
        },
      ]


export default SideData

