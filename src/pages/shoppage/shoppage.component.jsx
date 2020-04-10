import React from "react";

import SHOP_DATA from "./shopdata";
import "./shoppage.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollectonProps }) => (
          <CollectionPreview key={id} {...otherCollectonProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
