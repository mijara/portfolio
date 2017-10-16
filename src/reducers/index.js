import {combineReducers} from "redux";
import {RECEIVE_SECTIONS} from '../actions';

const sections = (state = {
  loaded: false
}, action) => {
  switch (action.type) {
    case RECEIVE_SECTIONS:
      return {
        ...state,
        all: action.payload.sections,
        loaded: true,
      };
    default:
      return state;
  }
};

const meta = (state = {
  title: 'loading...',
  subtext: '',
  hometext: ''
}, action) => {
  switch (action.type) {
    case RECEIVE_SECTIONS:
      return {
        title: action.payload.title,
        subtext: action.payload.subtext,
        hometext: action.payload.hometext,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  meta,
  sections,
});

export default reducer;
