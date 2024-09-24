import "./hero.css";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me2.png" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Software Engineer, Front End Web Developer (React)
        </h1>
        <p className="sub-title">
          As a front-end web developer with a strong focus on React.js, I'm
          passionate about crafting dynamic, scalable, and user-centric web
          applications. I thrive on building seamless interfaces that enhance
          user experience while ensuring optimal performance across all devices.
          With a deep understanding of HTML, CSS, and JavaScript, I bring
          designs to life, making them interactive and responsive.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">animation</div>
    </section>
  );
}
