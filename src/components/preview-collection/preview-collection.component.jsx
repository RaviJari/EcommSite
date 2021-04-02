import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from '../collection-item/collection-item.component'; 

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map(({id , ...otherCollectionProps}) => (
          <CollectionItem key={id} {...otherCollectionProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
