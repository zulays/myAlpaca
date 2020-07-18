import React, { Component } from "react";
import "./ManageProfile.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import { Link } from "react-router-dom";

const ManageProfile = () => {
  return (
    <>
      <Header />
      <div className="manageprofile-bigger">
        <h1 className="manageprofile-manage">Manage My Profile</h1>
        <div className="manageprofile-container">
          <Link className="manageprofile-link" to={"/useredit"}>
            <div className="manageprofile-rectangle-38">
              <p className="manageprofile-edit">Edit My Profile</p>
            </div>
          </Link>
          <div className="manageprofile-rectangle-39">
            <p className="manageprofile-hide">Hide my Profile from Others</p>
          </div>
          <Link className="manageprofile-link" to={"/userdelete"}>
            <div className="manageprofile-rectangle-40">
              <p className="manageprofile-delete">Delete my Profile</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageProfile;
