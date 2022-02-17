import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-navi";
import { Button, Grid, Item, Menu, MenuHeader } from "semantic-ui-react";
import NaviButton from "../components/NaviButton";
import NaviItem from "../components/NaviItem";
import { authService } from "../auth/authService";
import { store } from "../store";
import ErrorBoundary from "./ErrorBoundary";
import { createPostRequest } from "../api";

interface PropsType {
  children: any;
}

const fetchLogoutUser = createPostRequest("/auth/logoutUser");
const fetchForceLogoutUser = createPostRequest("/auth/forceLogoutUser");

const Layout: React.FC<PropsType> = (props: PropsType) => {
  const handleClick = () => {
    fetchLogoutUser(null);
    authService.logoutUser();
  };
  const handleForceClick = () => {
    fetchForceLogoutUser(null);
    authService.logoutUser();
  };
  return (
    <div>
      <header>
        <Menu pointing right>
          <Menu.Item header>My Website</Menu.Item>
          <NaviItem href="/">Home</NaviItem>
          {store.currentUser ? (
            <>
              <Menu.Item style={{ cursor: "pointer" }} onClick={handleClick}>
                Logout
              </Menu.Item>
              <Menu.Item
                style={{ cursor: "pointer" }}
                onClick={handleForceClick}
              >
                Force Logout
              </Menu.Item>
            </>
          ) : (
            <NaviItem href="/login" position="right">
              Login
            </NaviItem>
          )}
        </Menu>
      </header>
      <div className="container" style={{ height: "90vh" }}>
        <ErrorBoundary>{props.children}</ErrorBoundary>
      </div>
    </div>
  );
};

export default observer(Layout);
