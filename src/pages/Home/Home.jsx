import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { personalData } from '../../assets/data/personal';
import { educationData } from '../../assets/data/education';
import { experienceData } from '../../assets/data/experience';
import { achievementsData } from '../../assets/data/achievements';
import './Home.css';

const Home = () => {
    const previewExperiences = experienceData.professional.slice(0, 2);
    const previewAwards = achievementsData.honorsAndAwards.slice(0, 3);
    const educationTimelineRef = useRef(null);
    const reachedEducationIndexRef = useRef(-1);
    const [reachedEducationIndex, setReachedEducationIndex] = useState(-1);

    useEffect(() => {
        let animationFrame;

        const updateEducationProgress = () => {
            const timeline = educationTimelineRef.current;
            const items = timeline?.querySelectorAll('.education-timeline-item');

            if (!timeline || !items?.length) return;

            const timelineRect = timeline.getBoundingClientRect();
            const firstMarker = items[0].querySelector('.education-timeline-point');
            const pointRadius = (firstMarker?.offsetHeight ?? 0) / 2;
            const firstPoint = items[0].offsetTop + pointRadius;
            const lastPoint = items[items.length - 1].offsetTop + pointRadius;
            const viewportMarker = window.innerHeight * 0.55 - timelineRect.top;
            const progress = lastPoint === firstPoint
                ? 1
                : (viewportMarker - firstPoint) / (lastPoint - firstPoint);
            const clampedProgress = Math.min(1, Math.max(0, progress));
            const progressTrack = timeline.querySelector('.education-timeline-track');
            let reachedIndex = -1;

            items.forEach((item, index) => {
                if (viewportMarker >= item.offsetTop + pointRadius) reachedIndex = index;
            });

            timeline.style.setProperty('--education-progress', clampedProgress);
            const trackHeight = lastPoint - firstPoint;
            if (trackHeight > 0) {
                timeline.style.setProperty('--education-track-height', `${trackHeight}px`);
            }
            progressTrack?.setAttribute('aria-valuenow', Math.round(clampedProgress * 100));
            if (reachedEducationIndexRef.current !== reachedIndex) {
                reachedEducationIndexRef.current = reachedIndex;
                setReachedEducationIndex(reachedIndex);
            }
        };

        const handleViewportChange = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(updateEducationProgress);
        };

        updateEducationProgress();
        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);
        };
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <p className="hero-greeting">{personalData.hero.greeting}</p>
                        <h1 className="hero-name">{personalData.name}</h1>
                        <p className="hero-title">{personalData.title}</p>
                        <p className="hero-description">{personalData.hero.description}</p>
                        <div className="hero-actions">
                            <Button href={personalData.resume.downloadLink}>Download Resume</Button>
                            <Button variant="secondary" to="/experience">View Experience</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section (no header as specified) */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        {personalData.about.paragraphs.map((paragraph, index) => (
                            <p key={index} className="about-text">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>


            {/* Education Section */}
            <Section title="Education" id="education">
                <div
                    ref={educationTimelineRef}
                    className="education-timeline"
                >
                    <div
                        className="education-timeline-track"
                        role="progressbar"
                        aria-label="Education timeline progress"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="0"
                    >
                        <span className="education-timeline-fill" />
                    </div>
                    {educationData.map((edu, index) => {
                        const isReached = index <= reachedEducationIndex;

                        return (
                        <article
                            key={edu.id}
                            className={`education-timeline-item${isReached ? ' is-reached' : ''}`}
                        >
                            <span className="education-timeline-point" aria-hidden="true" />
                            <div className="education-timeline-content">
                                <div className="education-timeline-header">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-field">{edu.field}</p>
                                </div>
                                <div className="education-meta">
                                    <span className="education-institution">{edu.institution}</span>
                                    <span className="education-period">{edu.period}</span>
                                </div>
                                <p className="education-description">{edu.description}</p>
                                {edu.achievements && (
                                    <ul className="education-achievements">
                                        {edu.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                        );
                    })}
                </div>
            </Section>

            {/* Experience Preview Section */}
            <Section
                title="Experience"
                subtitle="A preview of my professional journey. Click below for the full story."
                id="experience-preview"
            >
                <div className="experience-preview-grid">
                    {previewExperiences.map((exp) => (
                        <Card key={exp.id}>
                            <Card.Body>
                                <div className="experience-header">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <span className="experience-period">{exp.period}</span>
                                </div>
                                <p className="experience-company">{exp.company} · {exp.location}</p>
                                <p className="experience-description">{exp.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div className="section-cta">
                    <Button variant="ghost" to="/experience">
                        View Full Experience
                    </Button>
                </div>
            </Section>

            {/* Honors and Awards Preview Section */}
            <Section
                title="Honors & Awards"
                subtitle="Recognition for contributions to research and the tech community."
                id="honors-preview"
            >
                <div className="honors-preview-list">
                    {previewAwards.map((award) => (
                        <div key={award.id} className="honor-item">
                            <div className="honor-year">{award.year}</div>
                            <div className="honor-content">
                                <h4 className="honor-title">{award.title}</h4>
                                <p className="honor-org">{award.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-cta">
                    <Button variant="ghost" to="/achievements">
                        View All Achievements
                    </Button>
                </div>
            </Section>
        </div>
    );
};

export default Home;
