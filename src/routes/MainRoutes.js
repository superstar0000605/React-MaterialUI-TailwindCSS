import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Content from 'pages/dashboard/content/index';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/main')));
const TrafficSources = Loadable(lazy(() => import('pages/dashboard/traffic-source')));
const OverView = Loadable(lazy(() => import('pages/dashboard/overview')));
const UserDemographics = Loadable(lazy(() => import('pages/dashboard/user-demographics')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: 'dashboard',
    element: <MainLayout />,
    children: [
        {
            path: 'default',
            element: <DashboardDefault />
        },
        {
            path: '',
            children: [
                {
                    path: 'overview',
                    element: <OverView />
                },
                {
                    path: 'content',
                    element: <Content />
                },
                {
                    path: 'traffic-sources',
                    element: <TrafficSources />
                },
                {
                    path: 'user-demographics',
                    element: <UserDemographics />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
    ]
};

export default MainRoutes;
