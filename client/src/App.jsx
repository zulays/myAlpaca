import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LogInPage from "./screens/LogInPage/LogInPage";
import ManageProfile from "./screens/ManageProfile/ManageProfile";
import UserCreate from "./screens/UserCreate/UserCreate";
import UserEdit from "./screens/UserEdit/UserEdit";
import UserDelete from "./screens/UserDelete/UserDelete";
import UserHome from "./screens/UserHome/UserHome";
import Home from "./screens/Home/Home";
import { getUsers } from "./services/users";

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
    console.log(this.state.user)
    return (
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={LogInPage}></Route>
        <Route exact path="/manageprofile" component={ManageProfile}></Route>
        {this.state.user && <Route exact path="/userdelete" render={() => <UserDelete user={this.state.user} />} />}
        {this.state.user && <Route exact path="/useredit" render={() => <UserEdit user={this.state.user} />} />}
        <Route exact path="/userhome" component={UserHome}></Route>
        <Route path="/usercreate" component={UserCreate}></Route>
      </div>
    );
  }
}

export default App;
