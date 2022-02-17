import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { createGetRequest } from "../../api";
import { authService } from "../../auth/authService";
import { PageErrorType } from "../../common/errorType";
import { store } from "../../store";

const fetchUserList = createGetRequest("/user");

const Home: React.FC = () => {
  useEffect(() => {
    tryFetchUserList();
  }, []);

  const tryFetchUserList = async () => {
    console.log("try...");
    const res = await fetchUserList();
    if (res.status === "unauthorized") {
      authService.logoutUser();
    }
    console.log(res);
  };

  if (store.currentUser) {
    return <div>Welcome, {store.currentUser.name}!</div>;
  } else {
    return <div>You have not logged in.</div>;
  }
};

export default observer(Home);
