let initialState = {
  basket: [],
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "addBasket":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
}
