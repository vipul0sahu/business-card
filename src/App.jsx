import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faBehance, faCodepen, faDribbble} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div>
    <div className="card">

      <div className="row">
        <img className="card__image" src= "https://images.unsplash.com/photo-1571234018566-1d3cc5d2991a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="women potrait" />
      </div>

        <div className="row">
          <section className="card__first-section">
            <div className="container">
              <div className="row">
                  <h1 className="card__first-section__heading">Laura Smith</h1>
                  <h4 className="card__first-section__heading-two">Frontend Developer</h4>
                  <h5 className="card__first-section__heading-three">laurasmith_website</h5>
              </div>
            </div>
          </section>

          <section className="card__second-section">
            <button className="card__second-section--light"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
            <button className="card__second-section--dark"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button>
          </section>

          <section className="card__third-section">
            <div className="container">
              <div className="row">
                <div>
                  <h3 className="card__third-section__heading">About</h3>
                  <p className="card__third-sectoin__title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                    impedit quam facilis, quos odio cumque dignissimos? Consequatur
                  </p>
                </div>
                <div>
                  <h3 className="card__third-section__heading">Interests</h3>
                  <p className="card__third-sectoin__title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                    eveniet ullam nulla id quas reprehenderit iusto in minus. Atque
                  </p>
                </div>
              </div>
            </div>
          </section>


      </div>
        </div>

          <section className="card__fourth-section">
            <div className="container">
              <div className="row d-flex">
                <FontAwesomeIcon icon={faSquareGithub} size="2x"/>
                <FontAwesomeIcon icon={faBehance} size="2x"/>
                <FontAwesomeIcon icon={faDribbble} size="2x"/>
                <FontAwesomeIcon icon={faCodepen} size="2x"/>
              </div>
            </div>
          </section>
    </div>
  );
}
