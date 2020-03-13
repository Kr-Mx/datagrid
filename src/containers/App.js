import React from 'react';
import {connect} from "react-redux";
import {selectColumn, setTableAction, sortTableAction} from "../actions/actions";
import {initialState} from "../constants/initialState";
import MyTable from "../components/MyTable";
import {Table} from "react-bootstrap";
import "../styles/Table.scss";

function mapStateToProps(state) {
  return {
    tableBody: state.tableBody,
    currentColumn: state.currentColumn,
    currentRow: state.currentRow
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
      dispatch(selectColumn(value));
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

