import { observer } from "mobx-react-lite";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { PageErrorType } from "../../common/errorType";
import { authService } from "../../auth/authService";

import classes from "./login.module.less";
import { LoginUserDto } from "../../api/interface/auth";
import { useState } from "react";
import { validateModel } from "../../validators";
import { createPostRequest } from "../../api";
import { useNavigation } from "react-navi";
import { UserEntityWithToken } from "../../api/interface/user";

const fetchLoginUser = createPostRequest<LoginUserDto, UserEntityWithToken>(
  "/auth/loginUser"
);

const model = new LoginUserDto();

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async () => {
    const res = await validateModel(model);
    if (res.length) {
      setErrorMessage("ERROR!");
    } else {
      const res = await fetchLoginUser(model);
      //  console.log(res);
      if (res.status === "success" && res.responseData) {
        authService.loginUser(res.responseData);
      }
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100%" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center"></Header>

        <Segment>
          <Form size="large">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
                model.name = e.target.value;
              }}
              value={name}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                model.password = e.target.value;
                console.log(model);
              }}
              value={password}
            />
            <p>{errorMessage}</p>
            <Button color="teal" fluid size="large" onClick={submit}>
              Login
            </Button>
          </Form>
        </Segment>

        <Message>
          New to us?{" "}
          <a className={classes.aka} href="#">
            Sign Up
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default observer(Login);
