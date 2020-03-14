import React from 'react';
import {connect} from "react-redux";
import {
  cleanInputAction, filterAllAction,
  filterTableAction,
  selectColumnAction,
  setTableAction,
  sortTableAction
} from "../actions/actions";
import {initialState} from "../constants/initialState";
import MyTable from "../components/MyTable";
import {Table} from "react-bootstrap";
import "../styles/Table.scss";

function mapStateToProps(state) {
  return {
    tableBody: state.tableBody,
    currentColumn: state.currentColumn,
    currentRow: state.currentRow,
    filterData: state.filterData,
    isFilterAll: state.isFilterAll,
    filterBoolean: state.filterBoolean
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

export function App(props) {
  return (
    <Table bordered hover variant="dark" style={{textAlign: "center"}}>
      <MyTable data={props}/>
    </Table>
  );
}

