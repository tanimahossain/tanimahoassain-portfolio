import { useState } from 'react';
import {
    FaCode,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegramPlane,
    FaTwitter
} from 'react-icons/fa';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { contactData } from '../../assets/data/contact';
import './Contact.css';

const socialIcons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Facebook: <FaFacebookF />,
    Instagram: <FaInstagram />,
    Telegram: <FaTelegramPlane />,
    Twitter: <FaTwitter />,
};

const getSocialIcon = (name) => socialIcons[name] || <FaCode />;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - in real app, this would send to a backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <Section
                title={contactData.heading}
                subtitle={contactData.description}
            >
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <Card hover={false} className="contact-card">
                            <Card.Body>
                                <h3 className="contact-info-title">Contact Information</h3>

                                <div className="contact-item">
                                    <span className="contact-label">Email</span>
                                    <a href={`mailto:${contactData.contactInfo.email}`} className="contact-value">
                                        {contactData.contactInfo.email}
                                    </a>
                                </div>

                                <div className="contact-item">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">{contactData.contactInfo.location}</span>
                                </div>

                                {contactData.contactInfo.website && (
                                    <div className="contact-item">
                                        <span className="contact-label">Website</span>
                                        <a
                                            href={contactData.contactInfo.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-value"
                                        >
                                            tanima.me
                                        </a>
                                    </div>
                                )}

                                <div className="contact-availability">
                                    <p>{contactData.availability.message}</p>
                                </div>

                                <div className="contact-social">
                                    <h4 className="social-title">Connect with me</h4>
                                    <div className="social-links">
                                        {contactData.social.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-icon-link"
                                                title={social.name}
                                                aria-label={social.name}
                                            >
                                                {getSocialIcon(social.name)}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <Card hover={false} className="contact-form-card">
                            <Card.Body>
                                <h3 className="form-title">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">{contactData.form.nameLabel}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={contactData.form.namePlaceholder}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">{contactData.form.emailLabel}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={contactData.form.emailPlaceholder}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">{contactData.form.subjectLabel}</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={contactData.form.subjectPlaceholder}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">{contactData.form.messageLabel}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={contactData.form.messagePlaceholder}
                                            required
                                            rows="5"
                                            className="form-input form-textarea"
                                        ></textarea>
                                    </div>

                                    <Button type="submit" className="form-submit">
                                        {contactData.form.submitLabel}
                                    </Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
