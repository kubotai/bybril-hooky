import * as b from "bobril";
import { StateClass } from "./src/stateClass";
import { TestPage } from "./pages/testPage";

const defaultRoute = { handler: () => <TestPage /> };

b.routes([
  b.route({ url: "/state", ...defaultRoute }),
  b.route({ handler: () => <StateClass />, url: "/stateClass" }),
  b.routeDefault(defaultRoute),
]);
