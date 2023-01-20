import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './DashboardLayout';

import Onboarding from './Onboarding';
import Account from './Account';
import Search from './Search';
import Dashboard from './Dashboard';
import JobDescription from './JobDescription';

export default function Router() {
  const routes = useRoutes([
    {
        path: '/',
        element: <Onboarding />
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard />},
        { path: 'search', element: <Search /> },
        { path: 'account', element: <Account /> },
        { path: 'job', element: <JobDescription/>}
      ],
    },
  ]);

  return routes;
}
