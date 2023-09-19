import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <section>
        <form>
          <fieldset>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </label>
            <textarea
              className="textarea"
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
              placeholder="Your message..."
            ></textarea>
            <button>Send Message!</button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default page;
