import React from "react";
import "./user.css";
import {
  CalendarTodayRounded,
  LocationSearchingRounded,
  MailOutlineRounded,
  PermIdentityRounded,
  PhoneAndroidRounded,
  PublishRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://shortest.link/Dov"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle"> Account Details </span>
            <div className="userShowInfo">
              <PermIdentityRounded className="userShowIcon" />
              <span className="userShowinfoTitle"> annabecker99 </span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayRounded className="userShowIcon" />
              <span className="userShowinfoTitle"> 10.12.1999 </span>
            </div>
            <span className="userShowTitle"> Account Details </span>
            <div className="userShowInfo">
              <PhoneAndroidRounded className="userShowIcon" />
              <span className="userShowinfoTitle"> +1 123 456 789 </span>
            </div>
            <div className="userShowInfo">
              <MailOutlineRounded className="userShowIcon" />
              <span className="userShowinfoTitle"> annabecker99@info.com </span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingRounded className="userShowIcon" />
              <span className="userShowinfoTitle"> New york | USA </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label> Username </label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateinput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Full name </label>
                <input
                  type="text"
                  placeholder="anna beck"
                  className="userUpdateinput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Email </label>
                <input
                  type="text"
                  placeholder="annabeck99@info.com"
                  className="userUpdateinput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Phone </label>
                <input
                  type="text"
                  placeholder="+1 123 456 789"
                  className="userUpdateinput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Address </label>
                <input
                  type="text"
                  placeholder="New york | USA"
                  className="userUpdateinput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://shortest.link/Dov"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  {" "}
                  <PublishRounded className="userUpdateIcon" />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
