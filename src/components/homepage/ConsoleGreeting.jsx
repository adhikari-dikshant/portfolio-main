// ConsoleGreeting.jsx
import { useEffect } from 'react';

const ConsoleGreeting = () => {
    useEffect(() => {
        const styles = {
            title: `
        color: white;
        background: black;
        font-size: 16px;
        font-weight: bold;
        padding: 8px 12px;
      `,
            message: `
        color: white;
        background: #1a1a1a;
        font-size: 14px;
        padding: 8px 12px;
      `,
            link: `
        color: #4fc3f7;
        font-size: 14px;
        padding: 4px 0;
      `,
            socialSection: `
        color: #ff69b4;
        font-size: 14px;
        font-weight: bold;
        padding: 8px 0;
      `
        };

        const displayGreeting = () => {
            // Store the original console.clear
            const originalClear = console.clear;

            // Clear console safely
            originalClear.call(console);

            console.log('%cDeveloper man here!', styles.title);
            console.log(
                '%cHello there,\n\nMy name is [Your Name], and I love making cool websites. If you have an offer please reach me out though *email* or through the *links* below.\n\nAlso! Check out my portfolio for more interesting projects.',
                styles.message
            );

            console.log('%cMy portfolio:', styles.link, 'https://your-portfolio-url.com');
            console.log('%cEmail:', styles.link, 'your.email@example.com');

            console.log('%cSocial Links', styles.socialSection);
            console.log('%cGitHub:', styles.link, 'https://github.com/yourusername');
            console.log('%cLinkedIn:', styles.link, 'https://linkedin.com/in/yourusername');
            console.log('%cFacebook:', styles.link, 'https://facebook.com/yourusername');
        };

        // Display initial greeting
        displayGreeting();

        // No need for the console listener that was causing the infinite loop

    }, []); // Empty dependency array means this runs once on mount

    return null;
};

export default ConsoleGreeting;