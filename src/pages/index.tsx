import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard, { dashboardLoader } from './Dashboard';
import InvoiceDetail, { invoiceDetailLoader } from './InvoiceDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
  },
  {
    path: '/invoice/:id',
    element: <InvoiceDetail />,
    loader: invoiceDetailLoader,
  },
]);

const RouterPage = () => {
  return <RouterProvider router={router} />;
};

export default RouterPage;
