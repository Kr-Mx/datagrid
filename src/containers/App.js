import React from 'react';
import {connect} from "react-redux";
import {
  cleanInputAction, columnVisibilityAction, filterAllAction, filterBooleanAction, filterEnumAction,
  filterTableAction,
  selectColumnAction,
  setTableAction,
  sortTableAction, virtualAction
} from "../actions/actions";
import {initialState} from "../constants/initialState";
import MyTable from "../components/MyTable";
import "../styles/Table.scss";

function mapStateToProps(state) {
  return {
    tableBody: state.tableBody,
    currentColumn: state.currentColumn,
    currentRow: state.currentRow,
    filterData: state.filterData,
    isFilterAll: state.isFilterAll,
    isVirtual: state.isVirtual,
    filterBoolean: state.filterBoolean,
    currentColumnVisibility: state.currentColumnVisibility,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTable: () => {
      dispatch(setTableAction(initialState));
    },
    sortTable: (value) => {
      dispatch(sortTableAction(initialState, value))
    },
    selectColumn: (value) => {
      dispatch(selectColumnAction(value));
    },
    filterTable: (value) => {
      dispatch(filterTableAction(initialState, value));
    },
    cleanInput: () => {
      dispatch(cleanInputAction());
    },
    filterAllTable: () => {
      dispatch(filterAllAction())
    },
    filterBooleanTable: () => {
      dispatch(filterBooleanAction(initialState))
    },
    filterEnumTable: (value) => {
      dispatch(filterEnumAction(initialState, value))
    },
    virtualTable: () => {
      dispatch(virtualAction())
    },
    columnVisibility: (value) => {
      dispatch(columnVisibilityAction(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

export function App(props) {
  return (
      <MyTable
        data={props}/>
  );
}

