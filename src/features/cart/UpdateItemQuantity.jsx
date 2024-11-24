import PropTypes from "prop-types";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantiy, increaseItemQuantity } from "./cartSlice";
function UpdateItemQuantity({ pizzaId,currentQuantity }) {
    const dispatch=useDispatch()
  return(
      <div className="flex gap-1 items-center">
        <Button type="round" onClick={()=>dispatch(decreaseItemQuantiy(pizzaId))}>-</Button>
        <span className="text-sm font-semibold">{currentQuantity}</span>
        <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
      </div>
  )
}
UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number,
  currentQuantity:PropTypes.number,
};

export default UpdateItemQuantity;
