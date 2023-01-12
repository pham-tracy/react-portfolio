import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <label for="Name">Name</label>
        <input name="Name" type="text" placeholder="Name" />

        <br />

        <label for="Email">Email</label>
        <input name="Email" type="text" placeholder="Email" />

        <br />

        <label for="Message">Message</label>
        <textarea
          name="Message"
          type="textarea"
          placeholder="Message"
        ></textarea>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
