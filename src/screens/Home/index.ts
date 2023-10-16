export default {
  getComponent: () => import('./Home').then(c => c.default),
};
