import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("mvgpeyok");
  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new
      </p>
      <div className="flex" style={{justifyContent:'space-between'}}>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              name="email"
              required
              type="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex myMessage" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" required id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="message flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: "37px" }}
                animationData={doneAnimation}
              />
              Your Message has been sent👌
            </p>
          )}
        </form>
        <div className="animation">
        <Lottie 
              className="contact-animation"
                style={{ height: 355 }}
                animationData={contactAnimation}
              />
        </div>
      </div>
    </section>
  );
}
