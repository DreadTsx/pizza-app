import { useFetcher } from "react-router";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  // eslint-disable-next-line no-unused-vars
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Prioriry</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
