// projectsData.js
import cortexMobile from "/src/assets/images/cortex-mobile.webp";
import cc from "/src/assets/images/codecanvas.webp";
import formixMobile from "/src/assets/images/formix-mobile.webp";
import remindMobile from "/src/assets/images/remind-mobile.webp";
import techdocMobile from "/src/assets/images/techdoc-mobile.webp";

const projectsData = [
    {
        title: 'Cortex - Notion Clone',
        description: 'Web Design / Fullstack',
        imageSrc: cortexMobile,
        link: 'https://github.com/adhikari-dikshant/notion-clone'
    },
    {
        title: 'Remind Me',
        description: 'Web Design / Fullstack',
        imageSrc: remindMobile,
        link: 'https://remind-me-orpin.vercel.app/'
    },
    {
        title: 'Formix - Automated Form Creator',
        description: 'Web Design / Fullstack',
        imageSrc: formixMobile,
        link: 'https://formix-eta.vercel.app/'
    },
    {
        title: 'Code Canvas - Beautify Code',
        description: 'Frontend Development',
        imageSrc: cc,
        link: 'https://code-canvas-omega.vercel.app/'
    },
    {
        title: 'TechDoc',
        description: 'Web Design / Frontend Development',
        imageSrc: techdocMobile,
        link: 'https://tech-documentation-page-zeta.vercel.app/'
    }
];

export default projectsData;