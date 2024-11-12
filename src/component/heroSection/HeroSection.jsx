import style from "./heroSection.module.css";
import hero from "../../assets/hero/Designer.png";
import heroSection from "../../data/heroSection.json";
import resume from '../../data/resume.pdf';
function HeroSection() {
  const { name, description, mail_to, linkedin, instagram, github } =
    heroSection[0];
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi, I'm {name}</h1>
        <p className={style.description}>{description}</p>
        <div className={style.buttonSection}><a href={`mailto:${mail_to}`} className={style.contactBtn}>
          Contact Me
          <i className="fas fa-paper-plane"></i>
        </a>
        <a href={resume} download={`${name}_resume.pdf`} className={style.resume}>
          <button className={style.button}>Get My Resume</button>
        </a></div>
      </div>
      <img src={hero} alt="hero_image" className={style.heroImg} />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
      <div id="socialMedia" className={style.social}>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={style.instagram}
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkedin}
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={style.github}
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
