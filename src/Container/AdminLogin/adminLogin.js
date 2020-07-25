import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "./../../Components/AppBAr/AppBar";
class AdminLogin extends React.Component {
  render() {
    return (
      <div>
        <AppBar btnValue="" />
        <br />
        <br />
        <br />
        <Grid container justify="center" style={{ textAlign: "center" }}>
          <Grid item xs={11} sm={10} md={6} lg={4}>
            <Paper style={{ padding: 30 }}>
              <h1>AdminLogin</h1>
              <TextField
                required
                id="standard-required"
                label="Email"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <TextField
                style={{ width: "100%" }}
                type="password"
                required
                id="standard-required"
                label="Password"
              />
              <br />
              <br />
              <Button
                style={{
                  backgroundColor: "blue",
                  width: "30%",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AdminLogin;
