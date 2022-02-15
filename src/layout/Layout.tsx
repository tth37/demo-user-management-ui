import { observer } from "mobx-react-lite";
import { Link } from "react-navi";
import { Button, Item, Menu, MenuHeader } from "semantic-ui-react";
import NaviButton from "../components/NaviButton";
import NaviItem from "../components/NaviItem";
import { authService } from "../service/authService";
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
          <NaviItem href="/">Home</NaviItem>
          {store.currentUser ? (
            <Item
              style={{ cursor: "pointer" }}
              onClick={() => authService.logoutUser()}
            >
              Logout
            </Item>
          ) : (
            <NaviItem href="/login">Login</NaviItem>
          )}
        </Menu>
      </header>
      <main>
        <ErrorBoundary>{props.children}</ErrorBoundary>
      </main>
    </div>
  );
};

export default observer(Layout);
