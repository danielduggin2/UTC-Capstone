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
        title: 'workouts',
        path: '/workouts',
        icon: icon('ic_analytics'),
    },
    {
        title: 'purchase',
        path: '/purchase',
        icon: icon('ic_cart'),
    },
    {
        title: 'View Patient',
        path: '/view-patient',
        icon: icon('ic_user'),
    },
    // below are original items
    // {
    //     title: 'dashboardOG',
    //     path: '/',
    //     icon: icon('ic_disabled'),
    // },
    {
        title: 'new appointment',
        path: '/new-appointment',
        icon: icon('ic_cart'),
    },
    {
        title: 'login',
        path: '/login',
        icon: icon('ic_user'),
    },
    {
        title: 'settings',
        path: '/settings',
        icon: icon('ic_settings'),
    },
];

export default navConfig;
