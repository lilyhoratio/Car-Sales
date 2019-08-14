export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

// WRITE AN ACTION CREATOR - hook up to App.js by importing them
export const removeFeature = id => {
  return {
    type: ADD_FEATURE,
    payload: id
  };
};

export const buyItem = feature => {
  return {
    type: BUY_ITEM,
    payload: feature
  };
};
