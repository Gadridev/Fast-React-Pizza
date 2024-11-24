import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { GetCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

function CartItem({ item }) {
  const {  pizzaId,name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(GetCurrentQuantityById(pizzaId));


  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ga">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center gap-6">
        <p className="text-sm font-bold"> {formatCurrency(totalPrice)}</p>
      </div>
      <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
      <DeleteItem pizzaID={pizzaId} />
    </li>
  );
}
CartItem.propTypes = {
  item: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default CartItem;