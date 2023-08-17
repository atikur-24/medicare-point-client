const Form = () => {
  return (
    <div>
      <form className="">
        <label className="my-5 ps-2" htmlFor="name">
          <small>Your name</small>
        </label>
        <input className="w-11/12 mb-4 h-10 outline-my-primary rounded-lg border-[1px] border-my-accent p-2" placeholder="Your Name" required type="text" name="name" id="name" /> <br />
        <label className="ps-2" htmlFor="email">
          <small>Your Email</small>
        </label>
        <input className="w-11/12 mb-4 h-10 outline-my-primary rounded-lg border-[1px] border-my-accent p-2" placeholder="Your Email" required type="email" name="email" id="email" />
        <br />
        <label className="ps-2" htmlFor="subject">
          <small>subject</small>
        </label>
        <br />
        <input className="w-11/12 mb-4 h-10 outline-my-primary rounded-lg border-[1px] border-my-accent p-2" placeholder="Subject" required type="subject" name="subject" id="subject" />
        <br />
        <label className="ps-2" htmlFor="message">
          <small>Your Message</small>
        </label>
        <textarea className="w-11/12 h-10 mb-4 outline-my-primary rounded-lg border-[1px] border-my-accent p-2 h-36" placeholder="Your Message" name="message" id="message" cols="30" rows="10" />
        <br />
        <input className="my-btn w-11/12" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
