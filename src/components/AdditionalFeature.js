import React, { useState } from "react";

import { connect } from "react-redux";
import { buyItem } from "./actions";

const AdditionalFeature = props => {
  console.log("add", props);

  const addNewFeature = e => {
    e.preventDefault(); // prevent event from bubbling up and refreshing page
    props.buyItem(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addNewFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     name: state.name
//   };
// };
// export default connect(
//   mapStateToProps,
//   { buyItem }
// )(AdditionalFeature);

export default AdditionalFeature;
