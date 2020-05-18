import React from "react"
import {Route} from "react-router-dom"

import "./shoppage.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/collection.component"

const ShopPage = ({match}) => {

  
   return (
      <div>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    
   )
}


export default ShopPage;
