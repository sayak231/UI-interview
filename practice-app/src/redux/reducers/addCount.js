export const addCountReducer = (state = 1, action) => {
  return {
    ...state,
    count: action.payload.count + 1,
  };
};
