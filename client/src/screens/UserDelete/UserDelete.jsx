import React, { Component } from "react";
import "./UserDelete.css";
import { deleteUser } from "../../services/users";
import { Link } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import { withRouter } from "react-router-dom";

class UserDelete extends Component {
  // make handledelete = method and arrow function.
  // call delete functions
  // history.push()....look at the reference(handleEdit).
  // wrap it in  withRouter

  handleDelete = async () => {
    const deleted = await deleteUser(this.props.user._id);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Header />
        <div className="userDelete-section">
          <p className="sorry-title">We are sorry to see you go...</p>
          <div className="options-box">
            <p className="tell-us">Tell us why so we can get better</p>
            <div className="checkbox-div">
              <div className="no-longer">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="no-longer"
                  name="no-longer"
                ></input>
                <label htmlFor="no-longer">I'm no longer studying abroad</label>
              </div>
              <div className="not-useful">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="not-useful"
                  name="not-useful"
                ></input>
                <label htmlFor="not-useful">
                  I didn't find the website useful
                </label>
              </div>
              <div className="wrong-info">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="wrong-info"
                  name="wrong-info"
                ></input>
                <label htmlFor="wrong-info">
                  Website provided wrong information
                </label>
              </div>
            </div>
          </div>
          <div className="buttons-div">
            <button className="delete-button" onClick={this.handleDelete}>
              Delete Profile
            </button>
            <button className="cancel-button">
              <Link className="cancel-link" to={`/manageprofile`}>
                Cancel
              </Link>
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(UserDelete);
