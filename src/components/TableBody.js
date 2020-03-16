import React from 'react';
import {FixedSizeList as List} from 'react-window';

export default function TableBody(props) {
  let {data} = props;
  let tablesBody = data.tableBody.map((row, index) => {
    return (
      <div
        key={index}
        className="table__body-row">
        {row.map((column, index) => {
          return (
            <div className="table__body-col" key={index} style={
              (!data.currentColumnVisibility[index]) ? {display: "none"} :
                (index === data.currentColumn) ? {backgroundColor: "#eaeaeb"} : {display: "flex"}}>
              {((index === 5) ? ((column) ? <>+</> : <>-</>) : column)}
            </div>
          )
        })}
      </div>
    )
  });
  let tableBody = () => (tablesBody);
  return (<>
      {data.isVirtual ?
        <List
          className="List"
          height={window.innerHeight}
          itemCount={1000}
          itemSize={75}
          width={window.innerWidth - 20}>
          {tableBody}
        </List> : <div  className="List">{tablesBody}</div>}
    </>
  );
}


