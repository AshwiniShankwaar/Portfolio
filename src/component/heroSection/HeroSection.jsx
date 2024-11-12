import style from './heroSection.module.css';
import hero from '../../assets/hero/Designer.png';
function HeroSection(){
    return <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>
                Hi, I'm Ashwini
            </h1>
            <p className={style.description}>
                I'm a full-stack developer with 1 year industrial experience in Java and ReactJs. 
            </p>
            <a href='mailto:ashwinishankwaar@gmail.com' className={style.contactBtn}>
                Contact Me 
                <i class="fas fa-paper-plane"></i>
                </a>
        </div>
        <img src={hero} alt="hero image" className={style.heroImg}/>
        <div className={style.topBlur}></div>
        <div className={style.bottomBlur}></div>
        <div id='socialMedia' className={style.social}>
        <a href='https://www.instagram.com/ashwini_shankwaar/' target='_blank' rel="noopener noreferrer" className={style.instagram}><i class="fa-brands fa-instagram"></i></a>
        <a href='https://www.linkedin.com/in/ashwini-kumar-3018a71b2/' target='_blank' rel="noopener noreferrer" className={style.linkedin}><i class="fa-brands fa-linkedin-in"></i></a>
        <a href='https://github.com/AshwiniShankwaar' target='_blank' rel="noopener noreferrer" className={style.github}><i class="fa-brands fa-github"></i></a>
        </div>
    </section>
}

export default HeroSection;