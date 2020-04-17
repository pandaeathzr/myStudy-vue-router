import Main from '../../components/layout/main'
import home from '../../modules/home/index';
import sonHome from '../../modules/home/components/son';
// const home = () => {import('../../modules/home/index')};
const homeRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Main,
    redirect: {name: 'homepage'},
    children: [
      {
        name: 'homepage',
        path: '/homePage',
        component: home,
      },
      {
        path: '/homePageSon',
        component: sonHome,
      }
    ]
  }
]

export default homeRoutes;