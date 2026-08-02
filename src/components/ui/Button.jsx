import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    to,
    href,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    ...props
}) => {
    const baseClass = `button button--${variant} button--${size} ${className}`;

    // Internal link using React Router
    if (to) {
        return (
            <Link to={to} className={baseClass} {...props}>
                {children}
            </Link>
        );
    }

    // External link
    if (href) {
        return (
            <a
                href={href}
                className={baseClass}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    // Regular button
    return (
        <button
            type={type}
            className={baseClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
