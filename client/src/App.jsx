import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LogInPage from "./screens/LogInPage/LogInPage";
// import ManageProfile from "./screens/ManageProfile/ManageProfile";
import UserCreate from "./screens/UserCreate/UserCreate";
import UserEdit from "./screens/UserEdit/UserEdit";
import UserDelete from "./screens/UserDelete/UserDelete";
import UserHome from "./screens/UserHome/UserHome";
import { getUsers } from "./services/users";

// delete
import Home from "./screens/Home/Home";
// delete

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }

  componentDidMount = async () => {
    const users = await getUsers();
    this.setState({
      user: users[users.length - 1],
    });
  };

  render() {
    return (
      <div className="App">
        {/* delete */}
        <Route exact path="/" component={Home}>
          Home
        </Route>
        {/*  */}

        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/login" component={LogInPage}></Route>
        {/* <Route exact path="/manageprofile" component={ManageProfile}></Route> */}
        {this.state.user && (
          <Route
            exact
            path="/userdelete"
            render={() => <UserDelete user={this.state.user} />}
          ></Route>
        )}
        {this.state.user && (
          <Route
            exact
            path="/useredit"
            render={() => <UserEdit user={this.state.user} />}
          ></Route>
        )}
        <Route exact path="/userhome" component={UserHome}></Route>
        <Route path="/usercreate" component={UserCreate}></Route>
      </div>
    );
  }
}

export default App;
