import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import ErrorPage from '../Pages/ErrorPage';
import Homepage from '../Pages/Homepage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import ProductsPage from '../Pages/ProductsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader:()=>fetch('./furnitureData.json')
      },
      {
        path: '/home',
        element: <Homepage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/product-details',
        element: <ProductDetailsPage />,
      },
    ],
  },
]);
