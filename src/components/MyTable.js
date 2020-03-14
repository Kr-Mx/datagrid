import React, {useEffect} from "react";
import SortButtons from "./SortButtons";
import Checkbox from 'react-three-state-checkbox';
import {filterBooleanAction} from "../actions/actions";

export default function MyTable(props) {
  let {data} = props;
  useEffect(() => data.setTable(), []);

  let tableHeadingArray = ["First Name", "Last Name", "Death Date", "Cost", "Work as", "Accident", "ID Number"];

  let tableHeading = tableHeadingArray.map((item, index) => {
      return (
        <th key={index}
            onClick={() => {
              data.selectColumn(index)
            }}
            style={(index === data.currentColumn) ? {backgroundColor: "#43494e"} : null}>
          <span className="table__heading-text">{item}</span>
          <input
            type="text"
            name="text-filter"
            value={(index === data.currentColumn) ? data.filterData : null}
            placeholder="Filter here..."
            onBlur={() => data.cleanInput()}
            onChange={(e) => data.filterTable(e.target.value)}/>
          <SortButtons data={data}/>
          {(index === 5) ?
            <Checkbox
            checked={data.filterBoolean.isChecked}
            indeterminate={data.filterBoolean.indeterminate}
            onChange={(e)=>{console.log(data, data.filterBooleanTable(), data.filterBoolean.isChecked, data.filterBoolean.indeterminate)}}
          /> : null}
        </th>
      )
    }
  );

  let tableBody = data.tableBody.map((row, index) => {
    return (
      <tr key={index}>
        {row.map((column, index) => {
          return (
            <td key={index} style={(index === data.currentColumn) ? {backgroundColor: "#43494e"} : null}>
              {(index === 5)?((column)?<>+</>:<>-</>):column}
            </td>
          )
        })}
      </tr>
    )
  });

  return (
    <>
      <input
        type="checkbox"
        name="filter-all"
        checked={data.isFilterAll}
        onClick={() => {
          data.filterAllTable()
        }}/>

      <thead>
      <tr>
        {tableHeading}
      </tr>
      </thead>
      <tbody>
      {tableBody}
      </tbody>
    </>
  )
}