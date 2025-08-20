import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const themes = [
        { path: '/', name: 'Ninja', icon: '🥷', theme: 'ninja' },
        { path: '/soda', name: 'Soda', icon: '🥤', theme: 'soda' },
        { path: '/dental', name: 'Dental', icon: '🦷', theme: 'dental' }
    ];

    const getCurrentTheme = () => {
        return themes.find(theme => theme.path === location.pathname) || themes[0];
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleThemeChange = (path) => {
        // Smooth scroll to top before navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Small delay to allow smooth scroll
        setTimeout(() => {
            navigate(path);
        }, 300);
    };

    return (
        <nav className={`theme-navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="current-theme">
                    <span className="theme-icon">{getCurrentTheme().icon}</span>
                    <span className="theme-name">{getCurrentTheme().name}</span>
                </div>
                <div className="theme-buttons">
                    {themes.map((theme) => (
                        <button
                            key={theme.path}
                            className={`theme-btn ${location.pathname === theme.path ? 'active' : ''}`}
                            onClick={() => handleThemeChange(theme.path)}
                            data-theme={theme.theme}
                        >
                            <span className="btn-icon">{theme.icon}</span>
                            <span className="btn-text">{theme.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
