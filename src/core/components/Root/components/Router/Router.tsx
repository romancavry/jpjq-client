// @ts-ignore
import { createBrowserRouter, createRender, ElementsRenderer } from 'found';

import { createRouteConfig } from 'core/routes/routeConfig';

import { Error404 } from 'screens/Errors';

let initialized: boolean;

const initialize = () => {
  if (!initialized) {
    const preloader = document.getElementById('preloader')!;

    initialized = true;

    // Wait until react has rendered
    // to prevent the transition lag
    setTimeout(() => {
      preloader.classList.add('loaded');

      // The timing and selectors are hardcoded,
      // because there is no way to include them in html
      setTimeout(() => {
        preloader.remove();
      }, 200);
    }, 200);
  }
};

const Router = createBrowserRouter({
  routeConfig: createRouteConfig(),

  render: createRender({
    renderError: ({ error }) => {
      initialize();

      let page = <div>Error {error.status}</div>;

      switch (error.status) {
        case 404:
          page = <Error404 />;
          break;
        default:
          break;
      }

      return page;
    },

    renderReady: ({ elements }) => {
      initialize();

      // @ts-ignore
      return <ElementsRenderer elements={elements} />;
    },
  }),
});

export default Router;
