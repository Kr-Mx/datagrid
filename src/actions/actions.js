import {SET_TABLE, SORT_TABLE, SELECT_COLUMN} from '../constants/ActionTypes';

export function setTableAction(payload) {
  return {
    type: SET_TABLE,
    payload
  }
}

export function sortTableAction(payload, value) {
  return {
    type: SORT_TABLE,
    payload,
    value
  }
}

export function selectColumn(value) {
  return {
    type: SELECT_COLUMN,
    value
  }
}
