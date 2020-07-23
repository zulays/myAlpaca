import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import LogInPage from "./screens/LogInPage/LogInPage";
import ManageProfile from "./screens/ManageProfile/ManageProfile";
import UserCreate from "./screens/UserCreate/UserCreate";
import UserEdit from "./screens/UserEdit/UserEdit";
import UserDelete from "./screens/UserDelete/UserDelete";
import UserHome from "./screens/UserHome/UserHome";
import Home from "./screens/Home/Home";
import { getUsers, createUser, updateUser } from "./services/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        confirm: "",
        from_location: "",
        to_location: "",
        education: "",
        area_of_study: {
          art: false,
          science: false,
          math: false,
          literature: false,
          liberal_arts: false,
          healthcare: false,
        },
        interests: {
          politics: false,
          space: false,
          social_media: false,
          music: false,
          sports: false,
          pop_culture: false,
        },
        hobbies: {
          cooking: false,
          jogging: false,
          bar_hopping: false,
          dance: false,
          movies: false,
          hiking: false,
        },
        assistance: {
          language: false,
          housing: false,
          currency: false,
          visa: false,
          local_connections: false,
          maps: false,
        },
        priorities: {
          academics: false,
          culture: false,
          shopping: false,
          sightseeing: false,
          spiritually: false,
          staying_in_touch: false,
        },
      },
      created: false,
    };
  }


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
      const created = await createUser({
        username: this.state.user.username,
        email: this.state.user.email,
        password: this.state.user.password,
      });
      this.setState({ user: created, created: true });
    }
  };

  handleEdit = async (e) => {
    e.preventDefault();
    let id = this.state.user._id;
    console.log(this.state.user);
    const updated = await updateUser(id, this.state.user);
    this.setState({
      // updated: true,
    });
    this.props.history.push("/userhome");
  };

  handleSelect = (e) => {
    const { name } = e.target;
    const { category } = e.target.dataset;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [category]: {
          ...prevState.user[category],
          [name]: !prevState.user[category][name],
        },
      },
    }));
  };

  componentDidMount = async () => {
    const users = await getUsers();
    const user = users[users.length - 1];

    this.setState({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        from_location: user.from_location,
        to_location: user.to_location,
        education: user.education,
        area_of_study: {
          art: user.area_of_study.art,
          science: user.area_of_study.science,
          math: user.area_of_study.math,
          literature: user.area_of_study.literature,
          liberal_arts: user.area_of_study.liberal_arts,
          healthcare: user.area_of_study.healthcare,
        },
        interests: {
          politics: user.interests.politics,
          space: user.interests.space,
          social_media: user.interests.social_media,
          music: user.interests.music,
          sports: user.interests.sports,
          pop_culture: user.interests.pop_culture,
        },
        hobbies: {
          cooking: user.hobbies.cooking,
          jogging: user.hobbies.jogging,
          bar_hopping: user.hobbies.bar_hopping,
          dance: user.hobbies.dance,
          movies: user.hobbies.movies,
          hiking: user.hobbies.hiking,
        },
        assistance: {
          language: user.assistance.language,
          housing: user.assistance.housing,
          currency: user.assistance.currency,
          visa: user.assistance.visa,
          local_connections: user.assistance.local_connections,
          maps: user.assistance.maps,
        },
        priorities: {
          academics: user.priorities.academics,
          culture: user.priorities.culture,
          shopping: user.priorities.shopping,
          sightseeing: user.priorities.sightseeing,
          spiritually: user.priorities.spiritually,
          staying_in_touch: user.priorities.staying_in_touch,
        },
      },
    });
  };

  render() {
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
            render={() => (
              <UserEdit
                user={this.state.user}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
                handleSelect={this.handleSelect}
                user={this.state.user}
                updated={this.state.updated}
              />
            )}
          />
        )}
        <Route exact path="/userhome" component={UserHome}></Route>
        {this.state.user && (
          <Route
            path="/usercreate"
            render={() => (
              <UserCreate
                created={this.state.created}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                username={this.state.user.username}
                password={this.state.user.password}
                email={this.state.user.email}
                confirm={this.state.user.confirm}
              />
            )}
          ></Route>
        )}
      </div>
    );
  }
}

export default withRouter(App);
