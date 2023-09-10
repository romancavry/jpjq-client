import { RedirectException, RouteRenderArgs } from 'found';

export default function unauthorizedOnly({
  Component,
  props,
  match,
}: RouteRenderArgs) {
  if (!props) {
    return undefined;
  }

  if (!Component) {
    return undefined;
  }

  return <Component {...props} />;
}

// import * as authSelectors from 'modules/auth/selectors';

// export default function unauthorizedOnly({
//   Component,
//   props,
//   match,
// }: RouteRenderArgs) {
//   if (!props) {
//     return undefined;
//   }

//   const {
//     context: {
//       store: { getState },
//     },
//   } = match;

//   const state = getState();
//   const authorized = authSelectors.getIsAuth(state.core);
//   const authAttempted = authSelectors.getIsAuthAttempted(state.core);

//   if (!authAttempted) {
//     return undefined;
//   }

//   if (authorized) {
//     throw new RedirectException('/');
//   }

//   if (!Component) {
//     return undefined;
//   }

//   return <Component {...props} />;
// }
