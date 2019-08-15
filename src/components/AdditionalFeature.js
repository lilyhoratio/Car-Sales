import React from "react";

const AdditionalFeature = props => {
  console.log("add", props);

  const addNewFeature = e => {
    e.preventDefault(); // prevent event from bubbling up and refreshing page
    props.buyItem(props.feature); // payload = props.feature (v8 engine)
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

export default AdditionalFeature;
