import * as counterKey from "../keys/counterKey";

//Action Creator
export const incrementCounter = () => ({
   type: counterKey.INCREMENT,
   payload: null
});

export const decrementCounter = () => ({
    type: counterKey.DECREMENT,
    payload: null
});
