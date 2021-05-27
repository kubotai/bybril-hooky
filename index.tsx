import * as b from "bobril";
import { HooksPage } from "./pages/hooksPage";

const defaultRoute = { handler: () => <HooksPage /> };

b.routes([
  b.route({ url: "/hooks", ...defaultRoute }),
  b.routeDefault(defaultRoute),
]);
