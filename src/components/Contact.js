import { Fade } from 'react-awesome-reveal';

function Contact() {
  return (
    <Fade direction="up" trigger0nce>
      <section className="container text-center py-5">
       <h2>Contact Me</h2>
       <p>Let's connect and secure the clouds together! ☁️</p>
       <a href="mailto:geetanjalipaturi@gmail.com" className="btn btn-primary">Email Me</a>
      </section>
    </Fade>
  );
}

export default Contact;
