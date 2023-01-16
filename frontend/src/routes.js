import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './DashboardLayout';

import Onboarding from './Onboarding';
import Account from './Account';
import Search from './Search';

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
        { path: 'app', element: <Search />},
        { path: 'account', element: <Account /> }
      ],
    }
  ]);

  return routes;
}
