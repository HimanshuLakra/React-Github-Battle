import { createStore } from 'redux'

// reducer
const counter => (state = 0, action) {
 
  switch(action.type){
    case 'INCREMENT' :
      return state + 1;
    default:
      return state;
  }
}


const store = createStore(counter);
