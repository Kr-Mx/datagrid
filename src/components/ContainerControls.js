import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {blue} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';

export default function ContainerControls(props) {
  let {data} = props;
  const BlueCheckbox = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

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
    </div>
  );

}
//TODO: ошибка в фильтрации