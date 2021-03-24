import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@react-d/react-demo",
  app: () => System.import("@react-d/react-demo"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@vue-d/vue-app",
  app: () => System.import("@vue-d/vue-app"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
