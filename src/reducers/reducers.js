import {SET_TABLE, SORT_TABLE} from "../constants/ActionTypes";

export default function reducers (state = {tableBody: []}, {type, payload}) {
  switch (type) {
    case SET_TABLE:
    return {...state, tableBody: payload};
    case SORT_TABLE:
      return {...state, tableBody: [].concat(payload)};
      default:
      return state;
  }
}