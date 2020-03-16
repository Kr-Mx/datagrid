import React from 'react';
import {FixedSizeList as List} from 'react-window';
import {withStyles} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


export default function TableBody(props) {
  let {data} = props;
  let tableBody = ({isScrolling}) => (
    data.tableBody.map((row, index) => {
      return (

        <div
          key={index}
          className="table__body-row">
          {data.isVirtual?(isScrolling ? 'Loading' : row.map((column, index) => {
            return (
              <div  className="table__body-col" key={index} style={

                (index === data.currentColumn) ? {backgroundColor: "#eaeaeb"} : null}>
                {((index === 5) ? ((column) ? <>+</> : <>-</>) : column)}
              </div>
            )
          })): row.map((column, index) => {
            return (
              <div className="table__body-col" key={index} style={
                (!data.currentColumnVisibility[index])? {display:"none"}:
                (index === data.currentColumn) ? {backgroundColor: "#eaeaeb"} :  {display: "flex"}}>
                {((index === 5) ? ((column) ? <>+</> : <>-</>) : column)}
              </div>
            )
          })}
        </div>
      )
    }));
  return (
    <List
      className="List"
      height={window.innerHeight}
      itemCount={1000}
      itemSize={75}
      useIsScrolling
      width={window.innerWidth-20}>
      {tableBody}
    </List>
  );
}


