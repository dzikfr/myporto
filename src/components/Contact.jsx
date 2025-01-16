import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12 place-items-center" id="contact">
      <Reveal>
        <div className="place-items-center">
          <form
            action="https://getform.io/f/arolzqvb"
            method="POST"
            className=" max-w-3xl p-5 md:p-12 border border-purple-600 rounded-lg bg-purple-700/10"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-200/10 hover:bg-purple-700/20 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
