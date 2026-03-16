import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Thanks from './pages/Thanks';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: 'about',
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: 'cart',
    element: (
      <>
        <Header /> <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: 'categories',
    element: (
      <>
        <Header />
        <Categories />
        <Footer />
      </>
    ),
  },
  {
    path: 'product',
    element: (
      <>
        <Header />
        <ProductDetails />
        <Footer />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
