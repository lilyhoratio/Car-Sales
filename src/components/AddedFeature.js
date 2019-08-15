import React from "react";

const AddedFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={e => {
          e.preventDefault();
          console.log("clicked");
          props.removeFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
