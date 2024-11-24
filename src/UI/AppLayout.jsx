import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";
import { useSelector } from "react-redux";

function AppLayout() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const navigation = useNavigation();
  console.log(navigation);
  const isloading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isloading && <Loading />}
      <Header />
      <div className="overflow-scroll ">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      {cart.length <= 0 ? "" : <CartOverview />}
    </div>
  );
}

export default AppLayout;
