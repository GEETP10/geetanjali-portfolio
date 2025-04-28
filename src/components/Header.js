import {Fade} from "react-awesome-reveal";

function Header() {
  return (
    <Fade direction="up" triggerOnce>
      <header
        className="text-white text-center p-5"
        style={{ backgroundImage: "linear-gradient(90deg, #9D50BB 0%, #6E48AA 100%)" }}
      >
        <h1>☁️ Geetanjali Paturi ☁️</h1>
        <p>Cloud Security Engineer | DevSecOps | Cloud Enthusiast 💜</p>
      </header>
    </Fade>
  );
}

export default Header;
