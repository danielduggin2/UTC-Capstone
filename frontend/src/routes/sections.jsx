import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const PatientsPage = lazy(() => import('src/pages/patients'));
export const WorkoutsPage = lazy(() => import('src/pages/workouts'));
export const ExercisesPage = lazy(() => import('src/pages/exercises'));
export const ViewPatientPage = lazy(() => import('src/pages/view-patient'));
export const PurchasePage = lazy(() => import('src/pages/purchase'));
export const InboxPage = lazy(() => import('src/pages/inbox'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SettingsPage = lazy(() => import('src/pages/settings'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const NewAppointmentPage = lazy(() => import('src/pages/new-appointment'));

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                { element: <IndexPage />, index: true },
                { path: 'patients', element: <PatientsPage /> },
                { path: 'inbox', element: <InboxPage /> },
                { path: 'workouts', element: <WorkoutsPage /> },
                { path: 'exercises', element: <ExercisesPage /> },
                { path: 'purchase', element: <PurchasePage /> },
                { path: 'user', element: <UserPage /> },
                { path: 'patients/:id', element: <ViewPatientPage /> },
                { path: 'new-appointment', element: <NewAppointmentPage /> },
                { path: 'settings', element: <SettingsPage /> },
            ],
        },
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: '404',
            element: <Page404 />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}
