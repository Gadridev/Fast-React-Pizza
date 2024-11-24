import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import Order, { loader as loaderOrder } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import AppLayout from "./UI/AppLayout";
import NotFound from "./UI/Error";
import {action as UpdateOrderAction} from "./features/order/UpdateOrder"
const root = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action:createOrderAction

      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader:loaderOrder,
        action:UpdateOrderAction
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={root} />;
}

export default App;
