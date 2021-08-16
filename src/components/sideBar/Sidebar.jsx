import React from "react";
import "./Sidebar.css";
import {
  LineStyleRounded,
  TrendingUpRounded,
  TimelineRounded,
  PersonOutlineRounded,
  StorefrontRounded,
  BarChartRounded,
  AttachMoneyRounded,
  MailOutlineRounded,
  ChatBubbleOutlineRounded,
  DynamicFeedRounded,
  ReportRounded,
  WorkOutlineRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" >
              <li className="sidebarListItem">
                <LineStyleRounded className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineRounded className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpRounded className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PersonOutlineRounded className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontRounded className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyRounded className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartRounded className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineRounded className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedRounded className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineRounded className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="siedbarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineRounded className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineRounded className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportRounded className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
