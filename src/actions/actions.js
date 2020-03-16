import {
  SET_TABLE,
  SORT_TABLE,
  SELECT_COLUMN,
  FILTER_TABLE,
  CLEAN_INPUT,
  FILTER_ALL,
  FILTER_BOOLEAN, FILTER_ENUM, VIRTUAL_TABLE, COLUMN_VISIBILITY
} from '../constants/ActionTypes';

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

export function filterTableAction(payload, value) {
  return {
    type: FILTER_TABLE,
    payload,
    value
  }
}

export function selectColumnAction(value) {
  return {
    type: SELECT_COLUMN,
    value
  }
}

export function cleanInputAction() {
  return {
    type: CLEAN_INPUT,
  }
}

export function filterAllAction(){
  return {
    type: FILTER_ALL,
  }
}

export function filterBooleanAction(payload){
  return {
    type: FILTER_BOOLEAN,
    payload
  }
}

export function filterEnumAction(value){
  return {
    type: FILTER_ENUM,
    value
  }
}

export function virtualAction(){
  return {
    type: VIRTUAL_TABLE,
  }
}

export function columnVisibilityAction(value){
  return {
    type: COLUMN_VISIBILITY,
    value
  }
}