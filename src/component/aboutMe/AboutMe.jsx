import style from "./aboutMe.module.css";
import dp from "../../assets/About/dp.jpg";
import aboutData from "../../data/About.json";
import details from "../../data/details.json";
function AboutMe() {
  const { name, aboutMe } = aboutData[0];
  const {role,employer,location} = details[0].experience[0];
  return (
    <section className={style.aboutSection} id="about">
      <h2>About Me</h2>
      <div className={style.about}>
        <div className={style.left}>
        <div className={style.imageContainer}>
          <div className={style.aboutImageWrapper}>
            <img src={dp} alt={name} className={style.dp} />
          </div>
          
        </div>
        <div className={style.info}>
        <p>{role}</p>
        <p>@ {employer}</p>
        <small>Location: {location}</small>
        </div>
        </div>
        <div className={style.aboutText}>
          {
            aboutMe.map((paragraph,index)=>(
              <p key={index} style={{ marginBottom: '1em' }}>
            {paragraph}
          </p>
            ))
          }
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
