import './skills.css';
import { useState, useEffect, useRef } from 'react';
import skillData from '../../data/Skills.json'; // Import JSON file

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [progressValues, setProgressValues] = useState(
    Array(skillData.length).fill(0)
  );

  const skillSectionRef = useRef(null);
  const speed = 20;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentSectionRef = skillSectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      skillData.forEach((skill, index) => {
        let progress = 0;
        const interval = setInterval(() => {
          setProgressValues((prevValues) => {
            const newValues = [...prevValues];
            if (newValues[index] < skill.percentage) {
              newValues[index] += 1;
            }
            return newValues;
          });

          progress += 1;
          if (progress >= skill.percentage) {
            clearInterval(interval);
          }
        }, speed);
      });
    }
  }, [inView, skillData, speed]);

  return (
    <section ref={skillSectionRef} className="skillSection">
      <h2>My Skills</h2>
      <div className='skillContainer'>
        {skillData.map((skill, index) => (
          <div key={index} className="skillCard">
            <div
              className="circularProcess"
              style={{
                background: `conic-gradient(#7d2ae8 ${progressValues[index] * 3.6}deg, #ededed 0deg)`,
              }}
            >
              <span className="processValue">{progressValues[index]}%</span>
            </div>
            <span className="skillSetName">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
