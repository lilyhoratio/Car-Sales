import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//import action functions
import { removeFeature, buyItem } from "./components/actions";

import { connect } from "react-redux";

const App = ({ state, removeFeature, buyItem }) => {
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
    // state: state // equivalent

    // needed if...
    // car: state.car,
    // store: state.store,
    // additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  // {}
  { removeFeature, buyItem } //hooks action creators to react app, and now it has functions as props
)(App);
