import { observer } from "mobx-react-lite";
import { Button } from "semantic-ui-react";
import { PageErrorType } from "../../common/errorType";
import { authService } from "../../service/authService";

const Login: React.FC = () => {
  return (
    <div>
      This is Login Page.
      <Button
        onClick={() =>
          authService.loginUser({ name: "ddd", id: 3, token: "333" })
        }
      >
        login!
      </Button>
    </div>
  );
};

export default observer(Login);
