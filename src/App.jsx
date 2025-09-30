import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as CreateOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as OrderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import Loader from "./ui/Loader";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: CreateOrderAction,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: OrderLoader,
          hydrateFallbackElement: <Loader />,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
