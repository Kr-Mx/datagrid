import {
  CLEAN_INPUT,
  FILTER_ALL,
  FILTER_BOOLEAN, FILTER_ENUM,
  FILTER_TABLE,
  SELECT_COLUMN,
  SET_TABLE,
  SORT_TABLE, VIRTUAL_TABLE
} from "../constants/ActionTypes";

const initialState = {
  tableBody: [],
  currentColumn: 0,
  filterData: "",
  isFilterAll: false,
  isVirtual: false,
  filterBoolean: {isChecked: false, indeterminate: true},
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
          if (state.isFilterAll === true && row.some(column => column.includes(value))) {
            return row
          }
          if (row[state.currentColumn].includes(value)) {
            return row
          }

        }), filterData: value
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
    case FILTER_BOOLEAN:
      if (!state.filterBoolean.indeterminate) {
        return {
          ...state, tableBody: [].concat(payload),
          filterBoolean: {isChecked: state.filterBoolean.isChecked, indeterminate: !state.filterBoolean.indeterminate}
        };
      }
      if (state.filterBoolean.indeterminate) {
        return {
          ...state, tableBody: [].concat(payload).filter(row => {
            if (row.includes(state.filterBoolean.isChecked)) {
              return row
            }
          }),
          filterBoolean: {isChecked: !state.filterBoolean.isChecked, indeterminate: !state.filterBoolean.indeterminate}
        }
      }
      break;
    case FILTER_ENUM:
      if (value === null){return {
        ...state, tableBody: [].concat(payload)}}
      else return {
        ...state, tableBody: state.tableBody.filter((row) => {
          if (row[state.currentColumn].includes(value)) {
            return row
          }
        })
      };
    case VIRTUAL_TABLE:
      return {
        ...state, isVirtual: !state.isVirtual
      };
    default:
      return state;
  }
}
