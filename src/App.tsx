import "./App.css";
import { store } from "./store";
import { observer } from "mobx-react-lite";
import { Router, View } from "react-navi";
import { routes } from "./route";
import Layout from "./layout/Layout";
import { authService } from "./service/authService";

function App() {
  const loggedIn = !!store.currentUser;
  return (
    <Router context={{ loggedIn }} routes={routes}>
      {loggedIn ? "in!" : "out"}
      <button
        onClick={() => {
          authService.logoutUser();
        }}
      >
        logout
      </button>
      <button
        onClick={() => {
          authService.loginUser({ name: "233", id: 3, token: "tije" });
        }}
      >
        login
      </button>
      <Layout>
        <View />
      </Layout>
    </Router>
  );
}

export default observer(App);
