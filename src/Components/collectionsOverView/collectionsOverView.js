import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../Components/Collection-previews/Collection-preview";
import { selectCollections } from "../../Components/redux/shop/Shop.Selectors";

import "./collectionsOverView.scss";

const CollectionsOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionsOverView);
