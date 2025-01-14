import { REMOVE_FEATURE, BUY_ITEM } from "../actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

// reducer - take original state and some action which defines what you want to change, and outputs a new state
// avoid mutating state

export const carReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case BUY_ITEM:
      // const feature = state.store.find(feature => feature.id === action.payload)
      return {
        ...state,
        car: {
          ...state.car,
          // features: [...state.cars.features, feature] // don't need to do this if you pass whole object in
          features: [...state.car.features, action.payload]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          // features: [...state.car.features, action.payload]
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
};
