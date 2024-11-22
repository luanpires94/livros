import s from "./styles.module.scss";

import faceBookIcon from "../../assets/images/facebook-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.svg";
import youtubeIcon from "../../assets/images/youtube-icon.png";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

export default function Footer() {
  return (
    <footer>
      <section className={s.container}>
        <div>
          <p>4002-8922</p>
        </div>
        <div>
          <a href="#">
            <img src={faceBookIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#">
            <img src={youtubeIcon} alt="Youtube" />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </section>
    </footer>
  );
}
