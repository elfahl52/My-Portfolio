import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FooterSection } from "./components/sections/FooterSection";
import { useDarkMode } from "./hooks/useDarkMode";
import { useScrollProgress } from "./hooks/useScrollProgress";
import profileImage from "./assets/khaled.jpeg";
import contentManagementImage from "./assets/2.png";
import chatAppImage from "./assets/chat app.png";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const roles = [
    "Full-Stack Developer",
];

const skillGroups = [
    {
        number: "01",
        title: "Backend",
        description: "Building clean and practical server-side solutions.",
        items: ["PHP", "Laravel", "OOP", "MySQL"],
    },
    {
        number: "02",
        title: "Frontend",
        description: "Creating modern and responsive user interfaces.",
        items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        number: "03",
        title: "Approach",
        description: "How I think about building quality products.",
        items: ["Clean Code", "Responsive Design", "Problem Solving", "UI Systems", "Algorithms", "C++", "Data Structures"],
    },
];

const projects = [
    {
        id: 1,
        title: "Car Rental Website",
        category: "Frontend",
        organization: "Personal project",
        period: "Personal project",
        previewUrl: "https://car-rental-wepsite.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
        description:
            "A responsive car-rental experience with a clear booking flow, polished vehicle browsing, and a practical interface for finding the right ride.",
        stack: ["React", "Tailwind", "Vite"],
        skills: ["Frontend design", "Responsive layout", "Booking flow", "UI systems"],
        tools: ["React", "Tailwind", "Vite"],
        outcomes: [
            "Built a responsive browsing experience for rental vehicles",
            "Created a focused interface around the booking journey",
            "Used reusable React components and Tailwind utility styling",
        ],
        links: {
            live: "https://car-rental-wepsite.vercel.app/",
            code: "https://github.com/elfahl52/car-rental-wepsite",
        },
    },
    {
        id: 2,
        title: "Ecommerce Storefront",
        category: "Ecommerce",
        organization: "Personal project",
        period: "Personal project",
        previewUrl: "https://ecommerce-xi-three-65.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        description:
            "A fully featured ecommerce storefront with product browsing, shopping cart, wishlist, deals, blog, support pages, dark mode, toast notifications, and smooth page transitions.",
        stack: ["React", "Vite", "Tailwind"],
        skills: ["Product catalog", "Cart and wishlist", "Responsive design", "UI state management"],
        tools: ["React", "Vite", "Tailwind", "React Router", "AOS", "Swiper"],
        outcomes: [
            "Built a responsive storefront with multiple customer-focused pages",
            "Centralized cart, wishlist, notifications, and UI state with a custom hook",
            "Added interactive product cards, mobile navigation, dark mode, and transitions",
        ],
        links: {
            live: "https://ecommerce-xi-three-65.vercel.app/",
            code: "https://github.com/elfahl52/Ecommerce2",
        },
    },
    {
        id: 3,
        title: "Kanban Board",
        category: "Productivity",
        organization: "Personal project",
        period: "Personal project",
        previewUrl: "https://kanban-board-nu-wheat.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
        description:
            "A responsive Kanban board for creating boards, organizing tasks into columns, managing subtasks, and tracking progress through an interactive interface.",
        stack: ["React", "Tailwind", "Vite"],
        skills: ["Task management", "Interactive UI", "Responsive design", "Component-based architecture"],
        tools: ["React", "Tailwind", "Vite"],
        outcomes: [
            "Built board and column workflows for organizing tasks",
            "Implemented subtask management and progress tracking",
            "Created a responsive interface with reusable React components",
        ],
        links: {
            live: "https://kanban-board-nu-wheat.vercel.app/",
            code: "https://github.com/elfahl52/kanban-board",
        },
    },
    {
        id: 4,
        title: "Giftos E-Commerce",
        category: "Backend",
        organization: "Personal project",
        period: "Personal project",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        description:
            "A backend-focused e-commerce project for managing products, customers, and online shopping workflows.",
        stack: ["PHP", "Laravel", "MySQL"],
        skills: ["E-commerce logic", "Backend development", "Database design", "API workflows"],
        tools: ["PHP", "Laravel", "MySQL"],
        outcomes: [
            "Built backend workflows for an e-commerce experience",
            "Structured product and customer data with a relational database",
            "Applied reusable server-side architecture to a practical project",
        ],
        links: {
            code: "https://github.com/elfahl52/-Giftos-E-Commerce",
        },
    },
    {
        id: 5,
        title: "Content Management System",
        category: "Backend",
        organization: "Personal project",
        period: "Personal project",
        image: contentManagementImage,
        description:
            "A modern Laravel CMS for managing categories, products, and users with English and Arabic localization, authentication, and role-based administration.",
        stack: ["Laravel", "PHP", "MySQL"],
        skills: ["Admin dashboard", "CRUD management", "Authentication", "Multilingual support"],
        tools: ["Laravel 12", "PHP 8.2+", "MySQL", "Blade", "Tailwind CSS", "Alpine.js", "Vite"],
        outcomes: [
            "Built protected admin workflows for categories, products, and users",
            "Added English and Arabic localization with localized routes",
            "Implemented authentication, role-based access, and category image uploads",
        ],
        links: {
            code: "https://github.com/elfahl52/Content-Management-System",
        },
    },
    {
        id: 6,
        title: "Real-Time Chat Application",
        category: "Backend",
        organization: "Personal project",
        period: "Personal project",
        image: chatAppImage,
        description:
            "A responsive Laravel chat application with real-time messaging, typing indicators, online status, message management, search, and dark mode.",
        stack: ["Laravel", "PHP", "MySQL"],
        skills: ["Real-time messaging", "WebSockets", "Responsive UI", "Authentication"],
        tools: ["Laravel 12", "Laravel Reverb", "Laravel Echo", "Pusher-js", "Tailwind CSS", "Vite", "Alpine.js"],
        outcomes: [
            "Enabled instant messaging with Laravel Reverb and WebSockets",
            "Added typing indicators, online status, unread counters, and message actions",
            "Built a responsive Messenger-inspired interface with search and dark mode",
        ],
        links: {
            code: "https://github.com/elfahl52/chat-app",
        },
    },
];

const workingStyle = [
    {
        title: "Clear interfaces",
        description:
            "I create interfaces that feel simple, confident, and easy to understand.",
    },
    {
        title: "Attention to detail",
        description:
            "Spacing, typography, interaction, responsiveness, and consistency all matter.",
    },
    {
        title: "Clean implementation",
        description:
            "I prefer maintainable components and practical solutions that scale with the product.",
    },
];

const educationItems = [
    {
        title: "Computer Science studies",
        organization: "Current focus",
        period: "Ongoing",
        description:
            "Building a strong foundation in software thinking, frontend engineering, and problem-solving through practical development work.",
        skills: ["Computer Science", "Algorithms", "Data Structures", "Problem Solving"],
        tools: ["JavaScript", "C++", "React", "GitHub"],
        outcomes: [
            "Strengthening core technical fundamentals",
            "Improving decision-making for UI and logic-heavy tasks",
            "Preparing for advanced frontend and software engineering work",
        ],
    },
];

const trainingItems = [
    {
        title: "Front-End Development Training",
        organization: "Huma Volve",
        period: "Training program",
        description:
            "Completed a structured front-end development program focused on professional workflow, industry expectations, and practical exposure to how modern frontend teams operate.",
        skills: ["Front-End Development", "UI consistency", "Professional workflow", "Market awareness"],
        tools: ["HTML", "CSS", "JavaScript", "React"],
        outcomes: [
            "Learned how frontend development fits into real product teams",
            "Improved understanding of user-centered design and clean implementation",
            "Gained more confidence working with frontend expectations in professional environments",
        ],
    },
    {
        title: "Projects, Git & GitHub Training",
        organization: "Ahmed Fathy's Almdrasa Platform",
        period: "3-month training program",
        description:
            "Completed a practical training path focused on React-based project work, version control, and collaborative GitHub workflows.",
        skills: ["React projects", "Git", "GitHub", "Version control", "Development workflow"],
        tools: ["React", "Git", "GitHub", "Project-based learning"],
        outcomes: [
            "Built practical experience with React project workflows",
            "Improved Git and GitHub habits for structured development",
            "Strengthened confidence in managing code changes and teamwork-ready workflows",
        ],
    },
];

const whyHireMe = [
    {
        title: "Frontend craftsmanship",
        description:
            "I care about clean interfaces, thoughtful spacing, and polished interactions that feel reliable and premium.",
    },
    {
        title: "Responsive design",
        description:
            "I build interfaces that adapt smoothly across screen sizes while preserving clarity and usability.",
    },
    {
        title: "Clean UI",
        description:
            "I focus on visual consistency, proper hierarchy, and a professional presentation that supports trust.",
    },
    {
        title: "React skills",
        description:
            "I use React with a practical mindset, emphasizing reusable structure, maintainability, and solid implementation.",
    },
    {
        title: "Problem-solving mindset",
        description:
            "I enjoy turning requirements into thoughtful solutions and improving the overall quality of the user experience.",
    },
    {
        title: "Backend development",
        description:
            "I build practical Laravel and PHP backends with clear server-side logic, authentication, and maintainable architecture.",
    },
    {
        title: "Database and APIs",
        description:
            "I work with MySQL, relationships, CRUD workflows, and API integrations to support reliable full-stack products.",
    },
];

function App() {
    const { theme, setTheme } = useDarkMode();
    const progress = useScrollProgress();

    const toggleTheme = () =>
        setTheme((current) =>
            current === "dark" ? "light" : "dark"
        );

    return (
        <div
            className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
            data-theme={theme}
        >
            <Navbar
                theme={theme}
                onToggleTheme={toggleTheme}
                scrollProgress={progress}
            />

            <main>
                <HeroSection roles={roles} profileImage={profileImage} />
                <AboutSection workingStyle={workingStyle} whyHireMe={whyHireMe} />
                <ExperienceSection
                    educationItems={educationItems}
                    trainingItems={trainingItems}
                    projectHighlights={projects}
                />
                <SkillsSection skillGroups={skillGroups} />
                <ProjectsSection projects={projects} />
                <ContactSection />
            </main>

            <FooterSection navItems={navItems} />
        </div>
    );
}

export default App;
