import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faStore, faUser, inbox,
   
  } from "@fortawesome/free-solid-svg-icons";

function Sidenav() {
    return (
      <div>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="'/materials/Lists'"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Home',
                itemId: '/dashHome',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FontAwesomeIcon  name="inbox" icon={faHome}/>,
              },
              {
                title: 'Material',
                itemId: '/materials',
                elemBefore: () => <FontAwesomeIcon  name="users" icon={faStore}/>,
                subNav: [
                  {
                    title: 'New Materials',
                    itemId: '/materials/AddNew',
                  },
                  {
                    title: 'Material List',
                    itemId: '/materials/Lists',
                  },
                  {
                    title: 'Material History',
                    itemId: '/materials/History',
                  },
                ],
              },
              {
                title: 'Products',
                itemId: '/products',
                subNav: [
                    {
                        title: 'New Products',
                        itemId: '/products/AddNew',
                      },
                      {
                        title: 'Products List',
                        itemId: '/products/Lists',
                      },
                ],
              },
            ]}
          />
      </div>
    );
}
export default Sidenav;