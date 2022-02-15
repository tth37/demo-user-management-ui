import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-navi";
import { Button, Grid, Item, Menu, MenuHeader } from "semantic-ui-react";
import NaviButton from "../components/NaviButton";
import NaviItem from "../components/NaviItem";
import { authService } from "../auth/authService";
import { store } from "../store";
import ErrorBoundary from "./ErrorBoundary";

interface PropsType {
  children: any;
}

const Layout: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div>
      <header>
        <Menu pointing right>
          <Menu.Item header>My Website</Menu.Item>
          <NaviItem href="/">Home</NaviItem>
          {store.currentUser ? (
            <Menu.Item
              position="right"
              style={{ cursor: "pointer" }}
              onClick={() => authService.logoutUser()}
            >
              Logout
            </Menu.Item>
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
