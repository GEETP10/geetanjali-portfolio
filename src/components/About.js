import {Fade} from "react-awesome-reveal";

function About() {
  return (
    <Fade direction="up" triggerOnce>
      <section className="container text-center py-5">
      <h2>About Me</h2>
      <p>
        I’m a software developer with 3+ years of experience in backend systems, frontend development, and systems programming. 
        My work blends low-level performance-oriented tools with high-level web applications, applying strong fundamentals in data structures, OOP, and algorithms.
      </p>
      <p>
        I’ve worked on internal dashboards, APIs, and cross-functional features—contributing to fast-paced product cycles and performance tuning efforts. 
        My code is well-tested, Git-managed, and developed in collaborative Agile settings.
      </p>
      </section>
    </Fade>
  );
}

export default About;
