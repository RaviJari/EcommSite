import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectShopCollection } from "../../redux/SHOP/shop.selector";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const CollectionOverview = ({ collection }) => (
  <div className="shop-page">
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: SelectShopCollection
});

export default connect(mapStateToProps)(CollectionOverview);
