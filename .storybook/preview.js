// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
import { Provider } from "react-redux";
import RootState from "../src/store/index";
import { RouterProvider } from "react-router-dom";

import router from "../src/routes/routes";

export const decorators = [
  (Story, context) => (
    <Provider store={RootState}>
      <Story />
    </Provider>
  ),
];
