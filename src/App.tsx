import "./App.css";
import { store } from "./store";
import { observer } from "mobx-react-lite";
import { Router, View } from "react-navi";
import { routes } from "./route";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  const loggedIn = !!store.currentUser;
  return (
    <Router context={{ loggedIn }} routes={routes}>
      <Layout>
        <View />
      </Layout>
    </Router>
  );
};

export default observer(App);
