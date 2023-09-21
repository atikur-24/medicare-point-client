import useOrderByPharmacist from "../../../../hooks/useOrderByPharmacist";
import NewOrderCard from "./NewOrderCard";

const NewOrders = () => {
  const [orders, refetch] = useOrderByPharmacist();

  return (
    <div className="px-4 pb-10">
      <div className="my-8 flex items-start gap-3 lg:gap-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">New orders</div>
            <div className="stat-value text-my-primary">{orders.length}</div>
          </div>
        </div>
        <h3 className="text-sm lg:text-base text-my-primary text-start lg:text-justify w-7/12 lg:w-8/12">
          To ensure timely delivery and customer satisfaction, we kindly request your prompt attention to this matter. Please prepare the orders for packing as soon as possible and ensure that they are packed securely to maintain product quality
          during transit.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-5">
        {orders?.map((order) => (
          <NewOrderCard key={order._id} order={order} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default NewOrders;
