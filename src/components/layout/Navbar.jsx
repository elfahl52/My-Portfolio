import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import profileImage from "../../assets/khaled.jpeg";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Navbar({ theme, onToggleTheme, scrollProgress }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");
    const [isScrolled, setIsScrolled] = useState(false);

    const isMobile = useMediaQuery("(max-width: 768px)");
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;
            let current = "#home";

            navItems.forEach((item) => {
                const element = document.querySelector(item.href);

                if (element && scrollPosition >= element.offsetTop) {
                    current = item.href;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isMobile && isOpen) {
            setIsOpen(false);
        }
    }, [isMobile, isOpen]);

    return (
        <>
            <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
                <motion.div
                    className="h-full origin-left"
                    style={{
                        width: `${scrollProgress}%`,
                        background:
                            "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
                        boxShadow:
                            "0 0 10px rgba(37,99,235,.6)",
                    }}
                />
            </div>

            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`fixed inset-x-0 z-50 mx-auto transition-all duration-500 ${
                    isScrolled
                        ? "top-4 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]"
                        : "top-0 w-full"
                }`}
            >
                <div
                    className={`
                        relative mx-auto flex items-center justify-between
                        border border-slate-200/70 dark:border-slate-800/80
                        bg-white/85 dark:bg-slate-950/85
                        px-4 py-3
                        shadow-sm dark:shadow-black/20
                        backdrop-blur-xl
                        transition-all duration-500
                        sm:px-6
                        ${
                            isScrolled
                                ? "rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-black/30"
                                : "rounded-none border-x-0 border-t-0 sm:rounded-b-2xl"
                        }
                    `}
                >
                    <div
                        className="
                            pointer-events-none absolute inset-0
                            bg-gradient-to-r
                            from-blue-500/[0.03]
                            via-transparent
                            to-violet-500/[0.04]
                        "
                    />

                    <a
                        href="#home"
                        className="group relative z-10 flex items-center gap-3"
                    >
                        <img
                            src={profileImage}
                            alt="Khaled Elfahl"
                            className="
                                relative h-10 w-10 rounded-xl object-cover
                                shadow-md shadow-blue-500/20
                                transition-all duration-300
                                group-hover:-translate-y-0.5
                                group-hover:shadow-lg
                                group-hover:shadow-blue-500/30
                            "
                        />

                        <div className="flex flex-col leading-none">
                            <span
                                className="
                                    text-sm font-bold tracking-tight
                                    text-slate-900
                                    dark:text-white
                                    sm:text-base
                                "
                            >
                                Khaled
                            </span>

                            <span
                                className="
                                    mt-1 text-[9px]
                                    font-semibold uppercase
                                    tracking-[0.2em]
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Developer
                            </span>
                        </div>
                    </a>

                    {!isMobile && (
                        <nav
                            className="
                                relative z-10 hidden items-center
                                rounded-xl
                                border border-slate-200
                                bg-slate-50/70
                                p-1
                                dark:border-slate-800
                                dark:bg-slate-900/70
                                md:flex
                            "
                        >
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.href;

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`
                                            relative rounded-lg
                                            px-4 py-2
                                            text-sm font-medium
                                            transition-all duration-300
                                            ${
                                                isActive
                                                    ? "text-slate-950 dark:text-white"
                                                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                            }
                                        `}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="
                                                    absolute inset-0 -z-10
                                                    rounded-lg
                                                    bg-white
                                                    shadow-sm
                                                    ring-1 ring-slate-200
                                                    dark:bg-slate-800
                                                    dark:ring-slate-700
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        {item.label}
                                    </a>
                                );
                            })}
                        </nav>
                    )}

                    <div className="relative z-10 flex items-center gap-3">
                        <ThemeToggle
                            theme={theme}
                            onToggle={onToggleTheme}
                        />

                        {!isMobile ? (
                            <Button
                                as="a"
                                href="#contact"
                                variant="primary"
                                className="
                                    group hidden items-center gap-2
                                    rounded-xl
                                    !border-0
                                    !bg-slate-900
                                    !px-5 !py-2.5
                                    text-sm font-semibold
                                    !text-white
                                    shadow-sm
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:!bg-blue-600
                                    hover:shadow-lg
                                    hover:shadow-blue-500/20
                                    dark:!bg-white
                                    dark:!text-slate-950
                                    dark:hover:!bg-blue-500
                                    dark:hover:!text-white
                                    sm:inline-flex
                                "
                            >
                                <span>Let's talk</span>

                                <FiArrowUpRight
                                    className="
                                        h-4 w-4
                                        transition-transform duration-300
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                />
                            </Button>
                        ) : (
                            <button
                                type="button"
                                aria-label={
                                    isOpen
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={isOpen}
                                onClick={() =>
                                    setIsOpen((value) => !value)
                                }
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    text-slate-900
                                    transition-all
                                    hover:border-blue-500/30
                                    hover:bg-blue-50
                                    dark:border-slate-800
                                    dark:bg-slate-900
                                    dark:text-white
                                    dark:hover:bg-slate-800
                                "
                            >
                                <AnimatePresence
                                    mode="wait"
                                    initial={false}
                                >
                                    {isOpen ? (
                                        <motion.span
                                            key="close"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                        >
                                            <FiX className="h-5 w-5" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                        >
                                            <FiMenu className="h-5 w-5" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        )}
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMobile && isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="
                                fixed inset-0 z-40
                                bg-slate-950/50
                                backdrop-blur-md
                            "
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="
                                fixed inset-x-4 top-24 z-50
                                mx-auto max-w-md
                                overflow-hidden
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                shadow-2xl
                                dark:border-slate-800
                                dark:bg-slate-950
                            "
                        >
                            <div className="p-5">
                                <nav className="space-y-2">
                                    {navItems.map((item, index) => {
                                        const isActive =
                                            activeSection ===
                                            item.href;

                                        return (
                                            <motion.a
                                                key={item.href}
                                                href={item.href}
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        0.05 +
                                                        index * 0.05,
                                                }}
                                                onClick={() =>
                                                    setIsOpen(false)
                                                }
                                                className={`
                                                    group flex items-center
                                                    justify-between
                                                    rounded-2xl
                                                    border px-4 py-4
                                                    transition-all
                                                    ${
                                                        isActive
                                                            ? "border-blue-500/20 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                                                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-500/20 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-blue-400"
                                                    }
                                                `}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className="
                                                            text-xs font-mono
                                                            text-slate-400
                                                            dark:text-slate-600
                                                        "
                                                    >
                                                        0{index + 1}
                                                    </span>

                                                    <span className="font-medium">
                                                        {item.label}
                                                    </span>
                                                </div>

                                                <FiArrowUpRight
                                                    className={`
                                                        h-4 w-4
                                                        transition-all
                                                        ${
                                                            isActive
                                                                ? "text-blue-500"
                                                                : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                                                        }
                                                    `}
                                                />
                                            </motion.a>
                                        );
                                    })}
                                </nav>

                                <Button
                                    as="a"
                                    href="#contact"
                                    variant="primary"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        mt-5 flex w-full
                                        items-center justify-center
                                        gap-2 rounded-2xl
                                        !bg-slate-900
                                        !py-3.5
                                        text-base font-semibold
                                        !text-white
                                        hover:!bg-blue-600
                                        dark:!bg-white
                                        dark:!text-slate-950
                                        dark:hover:!bg-blue-500
                                        dark:hover:!text-white
                                    "
                                >
                                    Let's talk
                                    <FiArrowUpRight className="h-4 w-4" />
                                </Button>

                                <p
                                    className="
                                        mt-5 text-center
                                        text-xs
                                        text-slate-400
                                        dark:text-slate-600
                                    "
                                >
                                    Available for new projects · 2026
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
