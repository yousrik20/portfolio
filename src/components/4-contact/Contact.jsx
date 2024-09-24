import "./contact.css";
export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new
      </p>
      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" />
          </div>
          <div className="flex myMessage"  style={{marginTop:'24px'}}>
            <label htmlFor="message">Your Message:</label>
            <textarea required id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="animation"></div>
      </div>
    </section>
  );
}
