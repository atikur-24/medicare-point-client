import CompletOrderCard from "./CompletOrderCard";

const CompletedOrders = () => {
  return (
    <section className="bg-lite py-6 lg:py-10 px-4 lg:px-8">
      <div className=" space-y-2 mb-5">
        <h3 className="text-xl lg:text-3xl tracking-wider font-medium">Completed Orders</h3>
        <p className="text-gray-5 lg:leading-7 text-sm">
          Here are you can see your completed orders
          <br /> If there is a problem with any order, you can return it within 2 days
        </p>
      </div>
      <div className="bg-white rounded-md">
        <CompletOrderCard />
      </div>
    </section>
  );
};

export default CompletedOrders;
