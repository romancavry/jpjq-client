export default {
  getComponent: () => import('./Auth').then(c => c.default),
};
