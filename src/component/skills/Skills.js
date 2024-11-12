import './skills.css';
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const skillSet = [
    { name: "Java", percentage: 90 },
    { name: "ReactJS", percentage: 85 },
    { name: "Spring Boot", percentage: 80 },
    { name: "API Dev", percentage: 88 },
    { name: "Microservice Dev", percentage: 85 },
  ];

  const [inView, setInView] = useState(false); // To track visibility of the section
  const [progressValues, setProgressValues] = useState(
    Array(skillSet.length).fill(0) // Initialize progress for each skill
  );

  const skillSectionRef = useRef(null);
  const speed = 20; // Speed of animation

  useEffect(() => {
    // IntersectionObserver to check if the skill section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // 50% of the section must be visible for the animation to start
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      skillSet.forEach((skill, index) => {
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
  }, [inView, skillSet, speed]);

  return (
    
      <section ref={skillSectionRef} className="skillSection">
        <h2>My Skills</h2>
        <div className='skillContainer'>
        {skillSet.map((skill, index) => (
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
