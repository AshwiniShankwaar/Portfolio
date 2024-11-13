import style from "./footer.module.css";
import heroSection from "../../data/heroSection.json";
function Footer() {
    const {mail_to} = heroSection[0];
  return (
    <div className={style.footer}>
      <div className={style.msg}>
        <p>If you loved my work, feel free to connect me.</p> {" "}
        <a href={`mailto:${mail_to}`} className={style.contactBtn}>
          Contact Me
          <i className="fas fa-paper-plane"></i>
        </a>
      </div>
      <p>
        &copy; 2024 by <b>Ashwini Kumar</b>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
