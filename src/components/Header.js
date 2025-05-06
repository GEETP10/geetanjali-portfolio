import {Fade} from "react-awesome-reveal";

function Header() {
  return (
    <Fade direction="up" triggerOnce>
      <header
        className="text-white text-center p-5"
        style={{ backgroundImage: "linear-gradient(90deg,rgb(206, 196, 210) 0%,rgb(83, 76, 94) 100%)" }}
      >
        <h1>Geetanjali Paturi </h1>
        <p>Software Engineer | DevSecOps | Cloud Enthusiast.</p>
      </header>
    </Fade>
  );
}

export default Header;
