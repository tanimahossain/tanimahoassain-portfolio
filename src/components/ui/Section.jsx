import './Section.css';

const Section = ({
    children,
    title,
    subtitle,
    id,
    className = '',
    size = 'default',
    ...props
}) => {
    return (
        <section
            id={id}
            className={`section section--${size} ${className}`}
            {...props}
        >
            <div className="section-container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </div>
                )}
                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
