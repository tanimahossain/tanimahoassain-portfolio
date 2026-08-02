import { useState, useEffect } from 'react';
import './PageNav.css';

const PageNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 140;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i].id);
                    return;
                }
            }
            setActiveSection(sections[0]?.id || '');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 120;
            const top = el.offsetTop - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <nav className="page-nav">
            <div className="page-nav-container">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`page-nav-item ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => scrollTo(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default PageNav;
