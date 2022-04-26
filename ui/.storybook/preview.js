import '@sippy-platform/mellow-css/dist/css/mellow.css';
import '@optimisegroup/valkyrie/dist/valkyrie.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
