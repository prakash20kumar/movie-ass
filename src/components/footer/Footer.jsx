import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`row mt-3 mb-5 ${styles.footer}`}>
      <div className={`col-md-8 col-sm-6 ${styles.heading}`}>
        <h3>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error earum perspiciatis praesentium sint
          ipsum provident blanditiis pariatur necessitatibus voluptas, cum, atque iste eligendi autem, culpa cupiditate
          placeat facilis repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perspiciatis? Numquam, enim illo voluptatum
          neque facere aut sed ut dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi earum?
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.facebook.com/prakash20kumar2000"
              className={styles.icon_link}
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://github.com/prakash20kumar"
              className={styles.icon_link}
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/prakash99kumar"
              className={styles.icon_link}
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/prakash99kumar1999/"
              className={styles.icon_link}
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className={`col-md-4 col-sm-6 ${styles.heading}`}>
        <h3>KEEP IN TOUCH</h3>
        <ul className="list-unstyled">
          <li>
            <p>
              <strong>
                <i className="fas fa-map-marker-alt" /> Address:
              </strong>
              <span> Gaya, Bihar, India</span>
            </p>
          </li>
          <li>
            <p>
              <strong>
                <i className="fas fa-map-marker-alt" /> Phone:
              </strong>
              +91 7992315671
            </p>
          </li>
          <li>
            <p>
              <strong>
                <i className="fas fa-envelope"></i> Email:
              </strong>
              <span> prakash20kumar2000@gmail.com</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
