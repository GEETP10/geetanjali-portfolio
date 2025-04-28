import {Fade} from 'react-awesome-reveal';
 function Resume() {
  return (
    <Fade direction ="up" trigger0nce>
     <section className="container text-center py-5">
      <h2>Resume</h2>
      <a href="Geetanjali_Paturi_Resume.pdf" download className="btn btn-primary">Download My Resume</a>
     </section>
    </Fade>
  );
}

export default Resume;
