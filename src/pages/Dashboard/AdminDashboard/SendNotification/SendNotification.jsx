import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SendNotification = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.senderEmail = email;
    data.url = "dashboard";
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/sendNotification`, data)
      .then((res) => {
        if (res.data?.insertedId) {
          reset();
          window.my_modal_sendNotification.close();
          toast.success("Announcement sended successfully");
        }
        setIsLoading(false);
      });
  };
  return (
    // <dialog id="my_modal_sendNotification" className="modal">
    <div className="modal-box w-96 xl:w-1/2">
      <form method="dialog" className="space-y-2">
        <button
          type="submit"
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 bg-red-500 text-white hover:bg-red-400"
        >
          ✕
        </button>
      </form>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-center font-nunito text-lg font-bold uppercase">
          Send Announcement
        </h4>
        <div>
          <img
            className="mx-auto w-60"
            src="https://i.ibb.co/q0sgyks/marketing.png"
            alt=""
          />
        </div>

        <div className="space-y-2">
          <input
            required
            placeholder="Enter title"
            type="text"
            name="name"
            {...register("name")}
            className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
            id=""
          />
          <input
            required
            placeholder="Enter message"
            type="text"
            name="deliveryTime"
            {...register("deliveryTime")}
            className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
            id=""
          />
          <input
            required
            placeholder="Photo URL"
            type="text"
            name="photoURL"
            {...register("photoURL")}
            className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
            id=""
          />
          <select
            placeholder="Select receiver"
            name="receiver"
            {...register("receiver")}
            className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
          >
            <option selected disabled value="user">
              Select receiver
            </option>
            <option value="user">User</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          className="submit-btn rounded- w-full cursor-pointer rounded-md py-2"
          type="submit"
        >
          {isLoading ? "Sending...." : "Send Announcement"}
        </button>
      </form>
    </div>
    // </dialog>
  );
};

export default SendNotification;
