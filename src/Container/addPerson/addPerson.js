import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextInput from "./../../Components/textField/textField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AppBar from "./../../Components/AppBAr/AppBar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
class AddPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date("2014-08-18T21:11:54"),
    };
  }
  render() {
    const handleDateChange = (date) => {
      this.setState({ selectedDate: date });
    };
    let { selectedDate } = this.state;
    return (
      <div>
        <AppBar />
        <Grid container justify="center">
          <Grid
            item
            xs={11}
            sm={10}
            md={6}
            lg={4}
            style={{ textAlign: "center" }}
          >
            <Paper style={{ padding: 20, marginTop: 30 }}>
              <TextInput label="Name" />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  style={{ width: "90%", marginLeft: 4 }}
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date of Birth"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <TextInput label="Age" type="number" />
              <TextInput label="Height" />
              <TextInput label="Eyes Color" />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  style={{ width: "90%", marginLeft: 4 }}
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date of Missing"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>

              <TextInput type="file" />
              <TextInput label="Location Last Seen" />
              <TextInput label="Description" />
              <Button
                style={{
                  width: "50%",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Add Person
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default AddPerson;
