import React, { Component } from "react";
import "./ManageProfile.css";
import { Redirect } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";

const ManageProfile = () => {
  return (
    <>
      <Header />
      <div className="manageprofile-bigger">
        <h1 className="manageprofile-manage">Manage My Profile</h1>
        <div className="manageprofile-container">
          <div className="manageprofile-rectangle-38">
            <p className="manageprofile-edit">Edit My Profile</p>
          </div>
          <div className="manageprofile-rectangle-39">
            <p className="manageprofile-hide">Hide my Profile from Others</p>
          </div>
          <div className="manageprofile-rectangle-40">
            <p className="manageprofile-delete">Delete my Profile</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageProfile;
