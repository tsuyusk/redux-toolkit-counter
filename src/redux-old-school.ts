import { createStore } from 'redux';

interface Action {
  type: string;
  payload: any;
}

const initialState = {
  counter: {
    value: 0,
  }
}

export type State = typeof initialState;

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'counter/increment': {
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        }
      }
    }

    case 'counter/incrementAmount': {
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        }
      }
    }

    default: 
      return state;
  }
}

// So I don't have to create an .d.ts file to config window object
const windowWithTsDisabled = window as any;

export const store = createStore(
  reducer,
  windowWithTsDisabled.__REDUX_DEVTOOLS_EXTENSION__ && windowWithTsDisabled.__REDUX_DEVTOOLS_EXTENSION__()
);
