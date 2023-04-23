import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard, { dashboardLoader } from './Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

const RouterPage = () => {
  return <RouterProvider router={router} />;
};

export default RouterPage;
