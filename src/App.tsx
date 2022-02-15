import "./App.css";
import { store } from "./store";
import { observer } from "mobx-react-lite";
import { Router, View } from "react-navi";
import { routes } from "./route";
import Layout from "./layout/Layout";
import { LoginUserDto } from "./api/interface/auth";
import { validate } from "class-validator";
import { validateLoginUserDto, validateModel } from "./validators";

const model = new LoginUserDto();
model.name = "333";
model.password = "44";

validateModel<LoginUserDto>(model);

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
