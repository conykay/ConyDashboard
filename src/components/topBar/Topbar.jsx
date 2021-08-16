import React from "react";
import "./topBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">ConyAdmin</span>
        </div>
        <div className="topRight">

          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>
            <img src="https://images.pexels.com/photos/4345992/pexels-photo-4345992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
