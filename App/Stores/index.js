import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { ExampleTypes } from './Example/Actions'
import { linkStoreWithPath } from 'firebase-redux';
import database from '@react-native-firebase/database';


// The database path you want to bind with
const messagePath = 'earnitdata'

// Action to dispatch when the value in the database changes
const messageActionCreator = (message) => ({
  type: ExampleTypes.SET_REMOTE,
  payload: message
});

// Portion of the state that should be written to the database
const messageSelector = (state) => state.example.remote;

// Create a function to bind '/message' in the database
// with 'state.message' in the Redux store
const linkMessage = linkStoreWithPath(
  messagePath,
  messageActionCreator,
  messageSelector
);

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
  })

  const { store, persistor } = configureStore(rootReducer, rootSaga)

  // Invoke anywhere in the code to set up the binding
  const unlink = linkMessage(database(), store);

  return { store, persistor }
}
