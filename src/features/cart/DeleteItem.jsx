import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import PropTypes from "prop-types";
import { deleteItem } from "./cartSlice"

function DeleteItem({pizzaID}) {
    const dispatch=useDispatch()
    return (
        <div>
        <Button type="small" onClick={()=>dispatch(deleteItem(pizzaID))}>delete</Button>
            
        </div>
    )
}
DeleteItem.propTypes = {
    pizzaID: PropTypes.number,
   }

export default DeleteItem
