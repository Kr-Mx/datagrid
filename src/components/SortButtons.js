import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React from "react";

export default function SortButtons(props){
  let {data} = props;
    return (
        <ToggleButtonGroup className="table__sort-buttons"
          name="sortButtons"
          type="checkbox"
          value={0}
          onClick={(e)=>{if(e.target.value){data.sortTable(e.target.value)}}}>
          <ToggleButton
            className="table__sort-button"
            variant="primary"
            value={-1}
            onClick={(e)=>{if(e.target.value){data.sortTable(e.target.value)}}}
          >🡅
          </ToggleButton>
          <ToggleButton
            className="table__sort-button"
            variant="primary"
            value={1}
            onClick={(e)=>{if(e.target.value){data.sortTable(e.target.value)}}}
          >🡇
          </ToggleButton>
        </ToggleButtonGroup>
       )
};

