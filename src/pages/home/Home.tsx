import { observer } from "mobx-react-lite";
import { PageErrorType } from "../../common/errorType";
import { store } from "../../store";

const Home: React.FC = () => {
  if (store.currentUser) {
    return <div>Welcome, {store.currentUser.name}!</div>;
  } else {
    return <div>You have not logged in.</div>;
  }
};

export default observer(Home);
