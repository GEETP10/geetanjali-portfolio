import {Fade} from "react-awesome-reveal";

function About() {
  return (
    <Fade direction="up" triggerOnce>
      <section className="container text-center py-5">
      <h2>About Me</h2>
      <p>I secure cloud infrastructures ☁️, automate threat detection 🔥, and add a spark of fun into security! 🌈</p>
      </section>
    </Fade>
  );
}

export default About;
