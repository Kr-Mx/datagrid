import React from 'react';
import {connect} from "react-redux";
import {setTableAction} from "../actions/actions";
import {initialState} from "../constants/initialState";
import TableHeading from "../components/TableHeading";
import TableBody from "../components/TableBody";
import {Table} from "react-bootstrap";
import "../styles/Table.scss";

function mapStateToProps(state) {
  return {
  tableBody: state.tableBody
  };
}

function mapDispatchToProps(dispatch){
  return {
    setTableBody: () => {
      dispatch(setTableAction(initialState));
    }
}}

export default connect(mapStateToProps, mapDispatchToProps)(App);

export function App(props) {
  return (
    <Table bordered hover variant="dark" style={{textAlign: "center"}}>
      <TableHeading/>
      <TableBody data = {props}/>
    </Table>
  );
}

