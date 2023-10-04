import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("We have received your email", {
              autoClose: 1000,
              hideProgressBar: true,
              theme: "colored",
              pauseOnHover: false,
            });
            e.target.reset();
          }
        },
        (error) => {
          toast.error(error.message, {
            autoClose: 3000,
            theme: "colored",
            pauseOnHover: false,
          });
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="mb-4 h-10 w-11/12 rounded border border-my-accent p-2  font-medium  placeholder-gray-4 outline-my-primary focus:border-2 focus:border-accent  focus:outline-none"
          placeholder="Your Name"
          required
          type="text"
          name="name"
          id="name"
        />{" "}
        <br />
        <input
          className="mb-4 h-10 w-11/12 rounded border border-my-accent p-2  font-medium  placeholder-gray-4 outline-my-primary focus:border-2 focus:border-accent  focus:outline-none "
          placeholder="Your Email"
          required
          type="email"
          name="email"
          id="email"
        />
        <br />
        <input
          className="mb-4 h-10 w-11/12 rounded border border-my-accent p-2  font-medium  placeholder-gray-4 outline-my-primary focus:border-2 focus:border-accent  focus:outline-none "
          placeholder="Subject"
          required
          type="subject"
          name="subject"
          id="subject"
        />
        <br />
        <textarea
          className="mb-4 h-36 w-11/12 rounded border border-my-accent p-2  font-medium  placeholder-gray-4 outline-my-primary  focus:border-2 focus:border-accent  focus:outline-none"
          placeholder="Your Message"
          name="message"
          id="message"
          cols="30"
          rows="10"
        />
        <br />
        <input className="my-btn w-11/12" type="submit" value="Send mail" />
      </form>
    </div>
  );
};

export default Form;
