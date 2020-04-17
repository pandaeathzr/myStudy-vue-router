import firstRouters from './first';
import secondRouters from './second';
import homeRouters from './home';

const routes = [
  firstRouters,
  secondRouters,
  ...homeRouters
]
export {routes};