import { createElement } from 'react';
import { personalData } from '../../assets/data/personal';
import {
    FaFacebookF,
    FaChartBar,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane
} from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiLinktree } from 'react-icons/si';
import './Footer.css';

const socialLinks = [
    { label: 'GitHub', href: personalData.social.github, icon: FaGithub },
    { label: 'LinkedIn', href: personalData.social.linkedin, icon: FaLinkedinIn },
    { label: 'Codeforces', href: personalData.social.codeforces, icon: SiCodeforces },
    { label: 'LeetCode', href: personalData.social.leetcode, icon: SiLeetcode },
    { label: 'Facebook', href: 'https://www.facebook.com/tanima.hossain786/', icon: FaFacebookF },
    { label: 'Instagram', href: 'https://www.instagram.com/tanima_hossain/', icon: FaInstagram },
    { label: 'Telegram', href: 'https://t.me/tanimahossain', icon: FaTelegramPlane },
    { label: 'StopStalk', href: 'https://www.stopstalk.com/user/profile/tanimahossain', icon: FaChartBar },
    { label: 'Linktree', href: personalData.social.linktree, icon: SiLinktree }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">{personalData.name}</span>
                        <p className="footer-tagline">{personalData.title}</p>
                    </div>

                    <div className="footer-social">
                        {socialLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                            >
                                {createElement(icon, { 'aria-hidden': true, size: 22 })}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
