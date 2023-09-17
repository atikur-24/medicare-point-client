import React from "react";

const ReturnRefundCancellationPolicy = () => {
  return (
    <div className="my-container font-Alexandria">
      <h1 className="text-2xl font-bold text-center m-4">Return, Refund, and Cancellation Policy</h1>

      <h2 className="text-xl font-bold text-left my-2 text-my-primary">Medicine Orders:</h2>
      <p>We understand that sometimes you may need to cancel your medicine order. Here are our policies regarding refunds and cancellations:</p>
      <ul>
        <li>1/If you cancel your medicine order within 5 hours of placing it, you will receive a full refund.</li>
        <li>2/If you cancel your medicine order after 5 hours but before it is delivered, you will be charged for the delivery fee, and the rest of the amount will be refunded.</li>
        <li>3/If you cancel your medicine order more than 2 hours after it has been delivered, you will not be eligible for a refund.</li>
      </ul>

      <h2 className="text-xl font-bold text-left my-2 text-my-primary">Lab Test Bookings:</h2>
      <p>For lab test bookings, we have the following refund and cancellation policy:</p>
      <ul>
        <li>1/If you cancel your lab test booking within 1 hour of making the booking, you will receive a full refund.</li>
        <li>
          2/If you cancel your lab test booking after 1 hour but before the scheduled appointment time, you will be charged a cancellation fee equivalent to the delivery charge, and the rest of the
          amount will be refunded.
        </li>
        <li>3/If you cancel your lab test booking more than 2 hours after making the booking, you will not be eligible for a refund.</li>
      </ul>

      <p className="my-4">Please note that all refund requests must be made through our website or customer support within the specified timeframes mentioned above.</p>

      <p>If you have any questions or concerns about our return, refund, and cancellation policy, please feel free to contact our customer support team for assistance.</p>

      <h2 className="text-xl font-bold text-left my-2 text-my-primary">Which Products Are Not Eligible For Returns?</h2>
      <ul>
        <li>
          1/If the item has been opened, partially used, or disfigured. The user is strongly advised to check the package carefully at the time of acceptance of products by the user from the user’s
          delivery rider.
        </li>
        <li>2/If the product has been tampered with.</li>
        <li>3/If the product packaging and packaging box or packaging seal has been tampered with.</li>
        <li>
          4/The user is strongly advised to check the package carefully at the time of acceptance of products by the user from the user’s delivery rider and it is emphasized that the user should not
          accept the order if the package appears to have been tampered with.
        </li>
        <li>5/If it is mentioned on the product detail page that the product is non-returnable.</li>
        <li>6/Any damage/defect which is not covered under the manufacturer's warranty.</li>
        <li>7/If the product is without original packing.</li>
        <li>7/If the product is damaged due to misuse.</li>
      </ul>
    </div>
  );
};

export default ReturnRefundCancellationPolicy;
