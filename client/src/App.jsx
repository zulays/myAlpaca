import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import LogInPage from "./screens/LogInPage/LogInPage"
// import ManageProfile from "./screens/ManageProfile/ManageProfile"
import UserCreate from "./screens/UserCreate/UserCreate"
import UserCreate from "./screens/UserCreate/UserCreate"
import UserEdit from "./screens/UserEdit/UserEdit"
import UserDelete from "./screens/UserDelete/UserDelete"
import UserHome from "./screens/UserHome/UserHome"


function App() {
  return (
    <div className="App">

      <Route exact path="/login" component={LogInPage}></Route>
      {/* <Route exact path="/manageprofile" component={ManageProfile}></Route> */}
      <Route exact path="/login" component={LogInPage}></Route>
      <Route exact path="/manageprofile" component={ManageProfile}></Route>
      <Route exact path="/userdelete" component={UserDelete}></Route>
      <Route exact path="/useredit" component={UserEdit}></Route>
      <Route exact path="/userhome" component={UserHome}></Route>
      <Route path="/usercreate" component={UserCreate}></Route>
      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
