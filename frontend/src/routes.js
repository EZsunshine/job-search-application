import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './DashboardLayout';

import Onboarding from './Onboarding';
import Account from './Account';
import Search from './Search';
import SavedJobs from './SavedJobs';
import AppliedJobs from './AppliedJobs';

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
        { index: true, element: <Search />},
        { path: 'saved', element: <SavedJobs />  },
        { path: 'applied', element: <AppliedJobs /> },
        { path: 'account', element: <Account /> },
      ],
    },
  ]);

  return routes;
}
