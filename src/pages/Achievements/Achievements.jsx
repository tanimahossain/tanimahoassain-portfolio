import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import PageNav from '../../components/ui/PageNav';
import { achievementsData } from '../../assets/data/achievements';
import './Achievements.css';

const sections = [
    { id: 'honors', label: 'Honors & Awards' },
    { id: 'certifications', label: 'Certifications' }
];

const Achievements = () => {
    return (
        <div className="achievements-page">
            <PageNav sections={sections} />

            {/* Honors and Awards Section */}
            <Section
                id="honors"
                title="Honors & Awards"
                subtitle="Recognition for contributions to research, academia, and the tech community."
            >
                <div className="awards-timeline">
                    {achievementsData.honorsAndAwards.map((award) => (
                        <Card key={award.id} className="award-card">
                            <Card.Body>
                                <div className="award-header">
                                    <h3 className="award-title">{award.title}</h3>
                                    {award.year && <span className="award-year">{award.date ? `${award.date}, ` : ''}{award.year}</span>}
                                </div>
                                <p className="award-org">{award.organization}</p>
                                <span className="award-year-mobile">{award.year}</span>
                                <p className="award-description">{award.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Certifications Section */}
            <Section
                id="certifications"
                title="Certifications"
                subtitle="Professional certifications and specialized training."
            >
                <div className="certifications-grid">
                    {achievementsData.certifications.map((cert) => (
                        <Card key={cert.id} variant="outlined">
                            <Card.Body>
                                <h3 className="cert-name">{cert.name}</h3>
                                <p className="cert-org">{cert.organization}</p>
                                <div className="cert-meta">
                                    <span className="cert-year">{cert.date ? `${cert.date}, ` : ''}{cert.year}</span>
                                    {cert.credentialId && (
                                        <span className="cert-id">ID: {cert.credentialId}</span>
                                    )}
                                </div>
                                {cert.description && (
                                    <p className="cert-description">{cert.description}</p>
                                )}
                                {cert.link && (
                                    <Button
                                        variant="ghost"
                                        size="small"
                                        href={cert.link}
                                        className="cert-verify"
                                    >
                                        Verify Credential
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Achievements;
