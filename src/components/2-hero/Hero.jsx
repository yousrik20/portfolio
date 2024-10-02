import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";

export default function Hero() {
  const lottieRef=useRef();
  return (
    <section className="hero flex" id="hero">
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
          <a style={{all:'unset'}} href="https://x.com/E95Kamal" target="_blank"><div className="icon icon-twitter"></div></a>
          <a style={{all:'unset'}} href="https://www.instagram.com/yousri.kamal?igsh=MW9yazMwc2psZmQ0eQ==" target="_blank"><div className="icon icon-instagram"></div></a>
          <a style={{all:'unset'}} href="https://github.com/yousrik20" target="_blank"><div className="icon icon-github"></div></a>
          <a style={{all:'unset'}} href="https://www.linkedin.com/in/youssri-salem-6a834522a/" target="_blank"><div className="icon icon-linkedin"></div></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie lottieRef={lottieRef} onLoadedImages={() => { 
        // @ts-ignore
        // https://lottiereact.com/
        lottieRef.current.setSpeed(0.5) }} animationData={devAnimation} />
      </div>
    </section>
  );
}
