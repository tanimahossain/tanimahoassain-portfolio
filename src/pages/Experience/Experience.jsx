import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import PageNav from '../../components/ui/PageNav';
import { experienceData } from '../../assets/data/experience';
import { skillsData } from '../../assets/data/skills';
import './Experience.css';

const sections = [
    { id: 'professional', label: 'Professional Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'speaking', label: 'Public Speaking' },
    { id: 'volunteering', label: 'Volunteering' }
];

const Experience = () => {
    return (
        <div className="experience-page">
            <PageNav sections={sections} />

            {/* Professional Experience Section */}
            <Section
                id="professional"
                title="Professional Experience"
                subtitle="My journey through the tech industry, from research to production."
            >
                <div className="professional-timeline">
                    {experienceData.professional.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {index < experienceData.professional.length - 1 && (
                                    <div className="timeline-line"></div>
                                )}
                            </div>
                            <Card className="timeline-card">
                                <Card.Body>
                                    <div className="exp-header">
                                        <div>
                                            <h3 className="exp-title">{exp.title}</h3>
                                            <p className="exp-company">{exp.company}</p>
                                        </div>
                                        <div className="exp-meta">
                                            <span className="exp-period">{exp.period}</span>
                                            <span className="exp-location">{exp.location}</span>
                                        </div>
                                    </div>
                                    <p className="exp-description">{exp.description}</p>
                                    <ul className="exp-responsibilities">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                    <div className="exp-technologies">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Skills Section */}
            <Section
                id="skills"
                title="Skills"
                subtitle="Technologies and tools I work with on a daily basis."
            >
                <div className="skills-grid">
                    {skillsData.map((category) => (
                        <Card key={category.id} hover={false} className="skill-category">
                            <Card.Header>
                                <h3 className="skill-category-title">{category.category}</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className="skills-list">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="skill-item">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Public Speaking Section */}
            <Section
                id="speaking"
                title="Public Speaking"
                subtitle="Sharing knowledge and experiences with the community."
            >
                <div className="speaking-grid">
                    {experienceData.publicSpeaking.map((talk) => (
                        <Card key={talk.id}>
                            <Card.Body>
                                <span className="talk-type">{talk.type}</span>
                                <h3 className="talk-title">{talk.title}</h3>
                                <p className="talk-event">{talk.event}</p>
                                <div className="talk-meta">
                                    <span>{talk.location}</span>
                                    <span>{talk.date}</span>
                                </div>
                                <p className="talk-description">{talk.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Volunteering Section */}
            <Section
                id="volunteering"
                title="Volunteering"
                subtitle="Giving back to the community and mentoring the next generation."
            >
                <div className="volunteering-list">
                    {experienceData.volunteering.map((vol) => (
                        <Card key={vol.id} variant="outlined">
                            <Card.Body>
                                <div className="vol-header">
                                    <div>
                                        <h3 className="vol-role">{vol.role}</h3>
                                        <p className="vol-org">{vol.organization}</p>
                                    </div>
                                    <span className="vol-period">{vol.period}</span>
                                </div>
                                <p className="vol-description">{vol.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Experience;
