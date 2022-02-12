import { mount, route } from "navi";
import Home from "../pages/home/Home";

export const routes = mount({
  "/": route({
    view: <Home />,
  }),
});
