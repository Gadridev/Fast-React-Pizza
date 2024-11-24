import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="font-semi bold mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user ? (
        <Button type="primary" to='/menu'>Contine Ordering : {user}</Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
