import React from "react";
import AppBar from "./../../Components/AppBAr/AppBar";
import Tabs from "./../../Components/Tabs/tabs";
class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <AppBar btnValue="Logout" />
        <Tabs />
      </div>
    );
  }
}
export default AdminHome;
