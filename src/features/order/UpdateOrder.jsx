import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button"
import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({order}) {
    const fetcher=useFetcher();
    return (
        <fetcher.Form method="PATCH" className="text-right"> 
        <Button type='primary'>Make priority</Button>
        {console.log(order)}
        </fetcher.Form>
    )
}
UpdateOrder.propTypes = {
    order: PropTypes.node.isRequired,
}
export default UpdateOrder
export async function action({params}){
    const data={priority:true};
    await updateOrder(params.orderId,data)
    return null
}
