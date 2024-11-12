import React, { useEffect, useRef } from 'react';
import './projects.css';
import logo from '../../assets/projects/logo.png';
import projects from '../../data/project.json';
const Projects = () => {
    const timelineRef = useRef(null);
    const containerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe each container for animation on scroll
        containerRefs.current.forEach((ref) => observer.observe(ref));

        // Trigger line animation when timeline is in view
        if (timelineRef.current) {
            const lineObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            timelineRef.current.classList.add('animate-line');
                            lineObserver.unobserve(entry.target); // Stop observing once animated
                        }
                    });
                },
                { threshold: 0.1 }
            );
            lineObserver.observe(timelineRef.current);
        }
    }, []);

    

    return (
        <section className='projectSection' id='projects'>
        <h2>Projects</h2>
        <div className="projectTimeline" ref={timelineRef}>
            
            {projects.map((project, index) => (
                <div
                    key={index}
                    ref={(el) => (containerRefs.current[index] = el)}
                    className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'}`}
                >
                    <img src={logo} alt={project.name} className="logo" />
                    <div className="textBox">
                        <h1>{project.name}</h1>
                        <small>{project.time}</small>
                        <p>{project.describe}</p>
                        <span><b>Technology used:</b> <small>{project.technology_used}</small></span>
                        <span className={`${index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}`}></span>
                        <a href={project.url} className='toolkit' target='_blank' rel="noreferrer">{project.url_to}</a>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default Projects;







