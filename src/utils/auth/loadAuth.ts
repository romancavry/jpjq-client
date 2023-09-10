import { RouteMatch } from 'found';

export default async function loadAuth({ context }: RouteMatch) {
  const {
    store: { dispatch, getState },
  } = context;

  console.log('context: ', context);

  // const authAttempted = authSelectors.getIsAuthAttempted(getState()[STORE_KEY]);

  // try {
  //   if (!authAttempted) {
  //     await dispatch(getUser());
  //     // if 401 - refresh will be triggered
  //     // if not 401 - catch will console the error
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
}
