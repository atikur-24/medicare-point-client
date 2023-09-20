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
    axios.post("http://localhost:5000/sendNotification", data).then((res) => {
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
        <button type="submit" className="btn btn-sm btn-circle btn-ghost bg-red-500 hover:bg-red-400 text-white absolute right-2 top-2">
          ✕
        </button>
      </form>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-lg font-bold font-nunito text-center uppercase">Send Announcement</h4>
        <div>
          <img className="w-60 mx-auto" src="https://i.ibb.co/q0sgyks/marketing.png" alt="" />
        </div>

        <div className="space-y-2">
          <input required placeholder="Enter title" type="text" name="name" {...register("name")} className="rounded border outline-my-accent outline-1 p-2 border-my-accent w-full" id="" />
          <input required placeholder="Enter message" type="text" name="deliveryTime" {...register("deliveryTime")} className="rounded border outline-my-accent outline-1 p-2 border-my-accent w-full" id="" />
          <input required placeholder="Photo URL" type="text" name="photoURL" {...register("photoURL")} className="rounded border outline-my-accent outline-1 p-2 border-my-accent w-full" id="" />
          <select placeholder="Select receiver" name="receiver" {...register("receiver")} className="rounded border outline-my-accent outline-1 p-2 border-my-accent w-full">
            <option selected disabled value="user">
              Select receiver
            </option>
            <option value="user">User</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
          {isLoading ? "Sending...." : "Send Announcement"}
        </button>
      </form>
    </div>
    // </dialog>
  );
};

export default SendNotification;
