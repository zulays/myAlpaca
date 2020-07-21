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
import { getUsers, createUser } from "./services/users";

class App extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     user: "",
    //   };
    // }

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        confirm: "",
      },
      created: false,
    };
  }

  //create intial state moves here
  //handlechange moves here

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.user.password === this.state.user.confirm) {
      console.log("we made it");
      const created = await createUser(this.state.user);
      console.log(created);
      this.setState({ user: created, created: true });
    }
  };

  // populate pw, confirm, put in required field. don't pass id. fix line 59! 
  // componentDidMount = async () => {
  //   const users = await getUsers();
  //   this.setState({
  //     user: users[users.length - 1],
  //   });
  // };

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={LogInPage}></Route>
        <Route exact path="/manageprofile" component={ManageProfile}></Route>
        {this.state.user && (
          <Route
            exact
            path="/userdelete"
            render={() => <UserDelete user={this.state.user} />}
          />
        )}
        {this.state.user && (
          <Route
            exact
            path="/useredit"
            render={() => <UserEdit user={this.state.user} />}
          />
        )}
        <Route exact path="/userhome" component={UserHome}></Route>
        <Route
          path="/usercreate"
          render={() => (
            <UserCreate
              created={this.state.created}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              user={this.state.user}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default App;
