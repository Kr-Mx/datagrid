import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React from "react";

export default function SortButtons(props){
  let {data} = props;
    return (
        <ToggleButtonGroup name="sortButtons" type="checkbox" value={0} onClick={(e)=>{
          if(e.target.value){data.sortTable(e.target.value)}}}>
          <ToggleButton  variant="secondary" value={-1}>🡅</ToggleButton>
          <ToggleButton  variant="secondary" value={1}>🡇</ToggleButton>
        </ToggleButtonGroup>
    );

}

