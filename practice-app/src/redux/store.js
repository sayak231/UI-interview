import { createStore } from "redux";

import { addCountReducer } from "./reducers/addCount.js";

const store = createStore(addCountReducer);

export default store;
