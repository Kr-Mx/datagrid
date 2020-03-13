import {SELECT_COLUMN, SET_TABLE, SORT_TABLE} from "../constants/ActionTypes";
export default function reducers(state = {tableBody: [], currentColumn: 0}, {type, payload, value}) {
  switch (type) {
    case SET_TABLE:
      return {...state, tableBody: payload};
    case SORT_TABLE:
        return {
          ...state, tableBody: [].concat(payload).sort((a, b) => {
            if (a[state.currentColumn] > b[state.currentColumn]) return value;
            if (a[state.currentColumn] < b[state.currentColumn]) return -value;
            return 0
          })
        };
    case SELECT_COLUMN:
      return {
        ...state, currentColumn: value
      };
    default:
      return state;
  }
}
//