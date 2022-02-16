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

const Login: React.FC = () => {
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
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
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
