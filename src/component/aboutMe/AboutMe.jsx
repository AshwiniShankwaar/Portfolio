import style from "./aboutMe.module.css";
import dp from "../../assets/About/dp.jpg";
function AboutMe() {
  return (
    <section className={style.aboutSection}>
      <h2>About Me</h2>
      <div className={style.about}>
        <div className={style.imageContainer}>
          <div className={style.aboutImageWrapper}>
            <img src={dp} alt="Ashwini Kumar" className={style.dp} />
          </div>
        </div>
        <div className={style.aboutText}>
          <p>
            Hello! I'm Ashwini, a full-stack developer skilled in Java, ReactJS,
            Spring Boot, and API development. With over a year of industry
            experience, I've worked on building efficient, scalable applications
            and specialize in designing microservices architectures that support
            robust, flexible systems.
          </p>
          <p>
            In my projects, I've developed RESTful APIs, used Spring Boot to
            streamline backend processes, and created intuitive, interactive
            frontend using ReactJS. I’m passionate about crafting solutions
            that meet real-world needs, whether by enhancing user experience or
            implementing seamless, secure integrations.
          </p>
          <p>
            My current goals include diving deeper into cloud technologies and
            exploring AI and machine learning, as I see these as key areas for
            future innovation.
          </p>
          <p>
            When I'm not coding, I enjoy hiking and photography—anything that
            lets me explore and experiment. If you're interested in
            collaborating or discussing potential opportunities, please feel
            free to reach out. I'd love to connect!
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
