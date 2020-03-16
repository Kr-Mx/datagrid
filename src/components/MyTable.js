import React, {useEffect} from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

export default function MyTable(props) {
  let {data} = props;
  useEffect(() => data.setTable(), []);
  return (
    <>
      <div className='table__container'>
        <TableHeading data={data}/>
        <TableBody data={data}/>
      </div>
    </>
  )
}
