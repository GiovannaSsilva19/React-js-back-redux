import { createStore } from 'redux';
import reducer from '../reducers';
// const initialState = {
//     frutas: [
//         {nome: "Banana"},
//         {nome: "Maça" }
//     ]
// }

// function reducer(state = initialState, action) {
//     if (action.type === "ADICIONAR") {
//         return { frutas: [ ...state.frutas, {...action.value}]}

//     }
//     else {
//         return state;
//     }
// }

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;