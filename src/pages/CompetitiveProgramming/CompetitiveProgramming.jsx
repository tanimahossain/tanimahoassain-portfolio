import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import PageNav from '../../components/ui/PageNav';
import { competitiveProgrammingData } from '../../assets/data/competitiveProgramming';
import './CompetitiveProgramming.css';

const sections = [
    { id: 'individual', label: 'Individual Contests' },
    { id: 'team', label: 'Team Contests' },
    { id: 'problem-solving', label: 'Problem Solving' },
    { id: 'problem-setting', label: 'Problem Setting & Judging' },
    { id: 'trainer', label: 'Trainer' }
];

const CompetitiveProgramming = () => {
    return (
        <div className="cp-page">
            <PageNav sections={sections} />

            {/* Individual Contests Section */}
            <Section
                id="individual"
                title="Individual Contests"
                subtitle="Solo achievements in prestigious programming competitions, including 140+ Codeforces contests and 50+ other online contests."
            >
                <div className="contests-grid">
                    {competitiveProgrammingData.individualContests.map((contest) => (
                        <Card key={contest.id}>
                            <Card.Body>
                                <div className="contest-header">
                                    <h3 className="contest-name">{contest.name}</h3>
                                    {contest.year && <span className="contest-year">{contest.date ? `${contest.date}, ` : ''}{contest.year}</span>}
                                </div>
                                <div className="contest-rank">{contest.rank}</div>
                                <p className="contest-round">{contest.round}</p>
                                <p className="contest-description">{contest.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Team Contests Section */}
            <Section
                id="team"
                title="Team Contests"
                subtitle="Collaborative achievements with talented teammates, including 15+ national level contests."
            >
                <div className="team-contests-list">
                    {competitiveProgrammingData.teamContests.map((contest) => (
                        <Card key={contest.id} variant="accent">
                            <Card.Body>
                                <div className="team-contest-header">
                                    <div>
                                        <h3 className="team-contest-name">{contest.name}</h3>
                                        <p className="team-name">Team: {contest.teamName}</p>
                                    </div>
                                    <div className="team-contest-meta">
                                        <span className="team-rank">{contest.rank}</span>
                                        <span className="team-year">{contest.year}</span>
                                    </div>
                                </div>
                                <p className="team-location">{contest.location}</p>
                                <p className="team-description">{contest.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Problem Solving Section */}
            <Section
                id="problem-solving"
                title="Problem Solving"
                subtitle="Solved problems across competitive programming platforms."
            >
                <div className="contests-grid">
                    {competitiveProgrammingData.problemSolving.platforms.map((platform) => (
                        <Card key={platform.name}>
                            <Card.Body>
                                <h3 className="contest-header">
                                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                                        {platform.name}
                                    </a>
                                </h3>
                                <div className="contest-rank">Handle: {platform.handle}</div>
                                <p className="contest-description">{platform.solved} solved problems</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Problem Setting & Judging Section */}
            <Section
                id="problem-setting"
                title="Problem Setting & Judging"
                subtitle="Contributing to the competitive programming community."
            >
                <div className="problem-setting-grid">
                    {competitiveProgrammingData.problemSettingAndJudging.map((item) => (
                        <Card key={item.id} variant="outlined">
                            <Card.Body>
                                <div className="ps-header">
                                    <span className="ps-role">{item.role}</span>
                                    <span className="ps-year">{item.year}</span>
                                </div>
                                <h3 className="ps-event">{item.event}</h3>
                                <p className="ps-description">{item.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Training Section */}
            <Section
                id="trainer"
                title="Trainer"
                subtitle="Sharing knowledge and helping others grow in competitive programming."
            >
                <div className="training-list">
                    {competitiveProgrammingData.trainer.map((item) => (
                        <Card key={item.id}>
                            <Card.Body>
                                <div className="training-header">
                                    <div>
                                        <h3 className="training-program">{item.program}</h3>
                                        <p className="training-org">{item.organization}</p>
                                    </div>
                                    <div className="training-meta">
                                        <span className="training-role">{item.role}</span>
                                        <span className="training-year">{item.year}</span>
                                    </div>
                                </div>
                                <p className="training-description">{item.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default CompetitiveProgramming;
