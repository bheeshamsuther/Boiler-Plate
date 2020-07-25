import React from "react";

import AppBar from "./../../Components/AppBAr/AppBar";
import Card from "./../../Components/Card/card";
import { Grid } from "@material-ui/core";

class Home extends React.Component {
    
  render() {
    const cardDetails = [
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        },
        {
          name: "Beerbal",
          age: 20,
          missingDate: "12-06-2020",
          contactNumber: 1234567890
        }
      ]
    return (
      <div>
        <AppBar btnValue="Name" btnValue1="Login" btnValue2="Language" />
        <Grid container >
        {
          cardDetails.map((val, i) => {
            return(
            <Grid item lg={3} xl={3} md={6} sm={6} xs={12}>
              <Card name={val.name}/>
            </Grid>
            )
          })
        }
      </Grid>
      </div>
    );
  }
}

export default Home;
