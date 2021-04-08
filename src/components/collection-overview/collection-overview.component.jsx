import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCollectionPreview } from "../../redux/SHOP/shop.selector";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverview);
