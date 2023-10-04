import CompletOrderCard from "./CompletOrderCard";

const CompletedOrders = () => {
  return (
    <section className="bg-lite px-4 py-6 lg:px-8 lg:py-10">
      <div className=" mb-5 space-y-2">
        <h3 className="text-xl font-medium tracking-wider lg:text-3xl">
          Completed Orders
        </h3>
        <p className="text-sm text-gray-5 lg:leading-7">
          Here are you can see your completed orders
          <br /> If there is a problem with any order, you can return it within
          2 days
        </p>
      </div>
      <div className="rounded-md bg-white">
        <CompletOrderCard />
      </div>
    </section>
  );
};

export default CompletedOrders;
