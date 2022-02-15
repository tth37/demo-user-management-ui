import { map, mount, redirect, route } from "navi";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export const routes = mount({
  "/": route({
    view: <Home />,
  }),
  "/login": map((request, context: { loggedIn: boolean }) => {
    if (context.loggedIn) {
      return redirect("/");
    }
    return route({ view: <Login /> });
  }),
});
