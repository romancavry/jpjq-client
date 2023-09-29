export default {
  getComponent: () => import('./My').then(c => c.default),
};
