import {withStyles} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

export const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);