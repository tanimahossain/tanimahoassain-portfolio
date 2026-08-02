import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    className = '',
    onClick,
    ...props
}) => {
    const baseClass = `card card--${variant} ${hover ? 'card--hoverable' : ''} ${className}`;

    return (
        <div className={baseClass} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

const CardHeader = ({ children, className = '' }) => (
    <div className={`card-header ${className}`}>{children}</div>
);

const CardBody = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = '' }) => (
    <div className={`card-footer ${className}`}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
