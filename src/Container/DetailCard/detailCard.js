import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Button } from "@material-ui/core";
import Navbar from "./../../Components/AppBAr/AppBar";
import "./detailCard.css";
class DetailCard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <Grid container justify="center">
          <Grid item xs={11} sm={10} md={6} lg={4}>
            <Paper>
              <div
                style={{ padding: 30, textAlign: "center" }}
                className="main_div"
              >
                <img src="data:image/jpeg;base64,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" />
                <p className="text">Name : Kamal</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <p className="text">Name :</p>
                <Button id="_btn">Contact Us</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DetailCard;
