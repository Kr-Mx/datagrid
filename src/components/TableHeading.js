import SortButtons from "./SortButtons";
import Checkbox from "react-three-state-checkbox";
import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from 'react-select';
import {position} from '../constants/initialState';
import ContainerControls from "./ContainerControls";
const options = position;
const CssTextField = withStyles({
  root: {
    '& input': {
      color:'white',
    },
    '& label.Mui-focused': {
      color: '#42a5f5',
    },
    '& .MuiFormLabel-root': {
      color: '#42a5f5'
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&:focus': {
        borderColor: 'white',
      },
      '& fieldset': {
        borderColor: '#42a5f5',
      },
    },
    '& fieldset .Mui-focused': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#42a5f5',
    },
  }
})(TextField);
export default function TableHeading(props) {
  let {data} = props;
  let tableHeadingArray = ["First Name", "Last Name", "Company", "Salary", "Position", "Available", "ID Number"];
  let tableHeading = tableHeadingArray.map((item, index) => {
      return (
        <div className="table__heading-cell"
          key={index}
            onClick={() => {data.selectColumn(index)}}
            style={
              (!data.currentColumnVisibility[index])? {display:"none"}:
              (index === data.currentColumn) ? {backgroundColor: "#eaeaeb"} : {display: "flex"}}>
          {(index === 5) ?
            <>
            <span className="table__heading-cell-title">{item}</span>
            <Checkbox
              className='table__boolean-filter'
              checked={data.filterBoolean.isChecked}
              indeterminate={data.filterBoolean.indeterminate}
              onChange={()=>{data.filterBooleanTable()}}
            />
            </> : undefined}
          {(index === 4) ?
            <>
              <span className="table__heading-cell-title">{item}</span>
              <Select
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                options={options}
              onChange={(e)=>{
                if (e === null){return data.filterEnumTable(e)}
                else e.map(item=> {return item.value}).forEach(item => data.filterEnumTable(item)); console.log(e)}}/>
            </> : undefined}

          {(index !== 5 && index !== 4)?<>
            <CssTextField
            className='text-field'
            variant="outlined"
            label={item}
            value={(index === data.currentColumn) ? data.filterData : undefined}
            onBlur={() => data.cleanInput()}
            onChange={(e) => data.filterTable(e.target.value)}
            />
              <SortButtons data={data}/>
            </>
          :null}
        </div>
      )
    }
  );

  return (
      <div className="table__heading-wrapper">
        <ContainerControls className="container__controls" data={data}/>
        <div className="table__heading">
          {tableHeading}
        </div>
      </div>
  );
}

//TODO:problem with outline filter