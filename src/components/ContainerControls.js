import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {BlueCheckbox} from "./BlueCheckbox";
import {tableHeadingArray} from "../constants/tableHeading";

export default function ContainerControls(props) {
  let {data} = props;
  let tableHeadingButton = tableHeadingArray.map(
    (item, index) => {
      return (
        <p key={index} className="column__control"
           onClick={() => data.columnVisibility(index)}
           style={(data.currentColumnVisibility[index]) ? {color: "white"} : {color: "red"}}
        >{item}</p>)
    });
  return (<div className="container__controls">
      <FormControlLabel
        control={
          <BlueCheckbox
            checked={data.isFilterAll}
            onClick={() => {
              data.filterAllTable()
            }}
          />
        }
        label="Filter in all columns"
      />
      <FormControlLabel
        control={
          <BlueCheckbox
            checked={data.isVirtual}
            onClick={() => {
              data.virtualTable()
            }}
          />
        }
        label="Turn on visualization"
      />
      <div className="column__controls">{tableHeadingButton}</div>
    </div>
  );
}
