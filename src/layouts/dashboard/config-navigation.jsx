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
    title: 'exercises',
    path: '/exercises',
    icon: icon('ic_lock'),
  },
  {
    title: 'purchase',
    path: '/purchase',
    icon: icon('ic_cart'),
   
  },
  {
    title: 'new appointment',
    path: '/new-appointment',
    icon: icon('ic_cart'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_user'),
  }
];

export default navConfig;
