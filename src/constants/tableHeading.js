import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

export const tableHeadingArray = ["First Name", "Last Name", "Company", "Salary", "Position", "Available", "ID Number"];
export const CssTextField = withStyles({
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