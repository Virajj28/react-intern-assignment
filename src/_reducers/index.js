import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { cardReducer } from './card.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  card:cardReducer,
});

export default rootReducer;