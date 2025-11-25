import { createBrowserRouter, Navigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import fetchCategoryLoader from "./loaders/categoryLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import fetchProductsLoader from "./loaders/productsLoader";
import Thanks from "./pages/Thanks";

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
        element: <Navigate to="/" />,
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
