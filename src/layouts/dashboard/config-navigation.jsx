import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'patients',
    path: '/patients',
    icon: icon('ic_user'),
  },
  {
    title: 'inbox',
    path: '/inbox',
    icon: icon('ic_blog'),
  },
  {
    title: 'workouts',
    path: '/workouts',
    icon: icon('ic_analytics'),
  },
  {
    title: 'exercises',
    path: '/exercises',
    icon: icon('ic_lock'),
  },
  {
    title: 'purchase',
    path: '/purchase',
    icon: icon('ic_cart'),
  },
  // below are original items
  {
    title: 'dashboardOG',
    path: '/',
    icon: icon('ic_disabled'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_disabled'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_disabled'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_disabled'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
