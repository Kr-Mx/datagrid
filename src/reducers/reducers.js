import {CLEAN_INPUT, FILTER_ALL, FILTER_TABLE, SELECT_COLUMN, SET_TABLE, SORT_TABLE} from "../constants/ActionTypes";
const initialState = {
  tableBody: [],
  currentColumn: 0,
  filterData: "",
  isFilterAll: false,
  filterBoolean: {checked: false, intermediate: true}
};

export default function reducers(state = initialState, {type, payload, value}) {
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
    case FILTER_TABLE:
      return {
        ...state, tableBody: [].concat(payload).filter((row) => {
          if(state.isFilterAll === true && row.some(column => column.includes(value))){
            return row
          }
          if(state.filterBoolean)
        if (row[state.currentColumn].includes(value)){return row}}), filterData: value
  };
    case SELECT_COLUMN:
      return {
        ...state, currentColumn: value
      };
    case CLEAN_INPUT:
      return {
        ...state, filterData: ""
      };
    case FILTER_ALL:
      return {
        ...state, isFilterAll: !state.isFilterAll
      };
    default:
      return state;
  }
}
//.some(column => column.includes(value))