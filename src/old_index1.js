import {createStore} from 'redux';

const initialState = {
  name: 'Paul',
  secondName: 'Petrov'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.payload};
    case 'CHANGE_SECOND_NAME':
      return {...state, secondName: action.payload};
  }
  return state;
}

const store = createStore(reducer);

console.log(store.getState());

const changeName = {
  type: 'CHANGE_NAME',
  payload: 'IVAN'
};

const changeSecondName = {
  type: 'CHANGE_SECOND_NAME',
  payload: 'IVANOV'
};

store.dispatch(changeName);

console.log(store.getState());

store.dispatch(changeSecondName);

console.log(store.getState());
