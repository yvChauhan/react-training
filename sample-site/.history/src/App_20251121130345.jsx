import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import { RouterProvider } from "react-router";

import fetchCategoryLoader from "./loaders/categoryLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import fetchProductsLoader from "./loaders/productsLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Category = lazy(() => import("./pages/Category"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Thanks = lazy(() => import("./pages/Thanks"));

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchCategoryLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
        loader: fetchProductsLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "thanks",
        element: <Thanks />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/cart",
//     element: (
//       <>
//         <Header />
//         <Cart />
//         <Footer />
//       </>
//     ),
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
