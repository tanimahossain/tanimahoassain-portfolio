import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { openSourceContributionsData, projectsData } from '../../assets/data/projects';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-page">
            <Section
                title="Projects"
                subtitle="Selected projects and tools I have built, including personal experiments and community-focused applications."
            >
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <Card key={project.id} variant="outlined" className="project-card">
                            <Card.Body>
                                <div className="project-header">
                                    <div>
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-name">{project.name}</h3>
                                    </div>
                                    <span className="project-status">{project.status}</span>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="project-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <Button href={project.link} variant="ghost" size="small">
                                        View on GitHub
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                title="Open Source Contributions"
                subtitle="Selected contributions to open source projects."
            >
                <div className="open-source-list">
                    {openSourceContributionsData.map((contribution) => (
                        <Card key={contribution.id} variant="accent" className="open-source-card">
                            <Card.Body>
                                <div className="project-header open-source-header">
                                    <div>
                                        <span className="project-category">{contribution.role}</span>
                                        <h3 className="project-name">{contribution.name}</h3>
                                    </div>
                                </div>

                                <p className="project-description">{contribution.description}</p>
                                <p className="open-source-org">{contribution.organization}</p>

                                <div className="project-tags">
                                    {contribution.technologies.map((tech) => (
                                        <span key={tech} className="project-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <Button href={contribution.link} variant="ghost" size="small">
                                        View Repository
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
