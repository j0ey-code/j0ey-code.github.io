/*
 * projects.js
 * Single source of truth for the project listing.
 *
 * Same story as posts.js: in the old site the Markov bot, the C++ CRUD
 * utility and the tuner each appeared twice -- once as a .project-card in
 * projects.html and again, byte for byte, as a .preview-card in
 * homepage.html.
 *
 * Projects.jsx renders all of these; Home.jsx filters to the ones flagged
 * `featured`. Note that posts.js uses `.slice(0, 3)` instead, because
 * posts are chronological and "the three newest" is what the homepage
 * wants. Projects are not -- "featured" is an editorial choice, so it
 * gets an explicit flag you can move around without reordering the page.
 *
 * `links` is an array so a project can carry any number of them; the old
 * markup hardcoded one <a> for most cards and three for the tuner.
 *
 * This file is .jsx rather than .js because two of the original card
 * descriptions carried an <i> emphasis. `description` therefore holds
 * either a plain string or a small JSX fragment -- both render the same
 * way from `{project.description}`, so the components never have to care
 * which one they got.
 */

export const projects = [
    {
        id: 'markov-bot',
        name: 'Markov Chatbot for Discord Servers',
        meta: 'Python · Markov Models · APIs · 2026',
        featured: true,
        description:
            'Simple Markov bot code meant to be implemented as a self-learning chatbot application within Discord servers. Written in Python 3.12. ' +
            'Also has a "scripted response" feature, where certain keywords or phrases can be added to a dictionary within the code to trigger pre-determined responses too. ' +
            'Planning to add another feature where it sends custom messages in reaction to people joining or leaving the server too.',
        links: [
            { label: 'GitHub', href: 'https://github.com/j0ey-code/markov-bot' },
        ],
    },
    {
        id: 'os-crud-cpp',
        name: 'OS-Level, CLI-Based Filesystem Operations Utility',
        meta: 'C++ · Operating Systems · Software Design · 2026',
        featured: true,
        description:
            'A small side-project that serves as a cross-platform, file management CLI utility, written in C++17. ' +
            "The compiled and executable program performs CRUD-like operations (create, read, update, delete, etc.) on your computer's filesystem. " +
            'The goal of this project was to replicate the functions of similar GNU/Linux commands (touch, mkdir, mv, rm, etc.), ' +
            'but all consolidated within a single, platform agnostic program, tool, and / or utility.',
        links: [
            { label: 'GitHub', href: 'https://github.com/j0ey-code/os-crud-cpp' },
        ],
    },
    {
        id: 'tuner',
        name: '12-Tone Chromatic Tuner (@ 440 Hz)',
        meta: 'JavaScript · HTML / CSS · 2025-2026',
        featured: true,
        description:
            'Chromatic 12-tone, simple, vanilla web-stack application that functions as ' +
            'a musical instrument tuner and pitch estimation tool, utilizing the YIN pitch ' +
            'detection algorithm and a low-pass filter to capture the bass(iest) ' +
            'note, using that as the determinant tone for the audio pipeline. ' +
            'Operates @ 440 Hz frequency range, i.e. the international tuning standard.',
        links: [
            /* Left as vanilla JS and served straight out of public/ -- it is a
               Web Audio app that would gain nothing from being rewritten in React. */
            { label: 'Demo', href: '/tunerV2-index.html' },
            { label: 'GitHub', href: 'https://github.com/j0ey-code/yin-webapp-tuner' },
            { label: 'Docs', href: '/assets/docs/yinPaper.pdf' },
        ],
    },
    {
        id: 'rust-101',
        name: 'An Introduction to Rust',
        meta: 'Rust · Imperative · Functional · 2025',
        featured: false,
        description: (
            <>
                A small collection of simple Rust code for a course in late 2025 about the features of various programming languages.
                The final project was to write some programs in a language entirely unfamiliar to us. This code was the result, essentially my first exposure to Rust.
                Programs within the repository <i>mostly</i> stress the concepts of imperative, procedural, and functional programming that were
                taught over that semester, as they apply to the Rust programming language in particular.
            </>
        ),
        links: [
            { label: 'GitHub', href: 'https://github.com/j0ey-code/rust-101' },
        ],
    },
    {
        id: 'twenty-questions',
        name: '20 Questions Console Game',
        meta: 'Java · Software Design · OOP · 2024',
        featured: false,
        description:
            'A twenty questions game program written in the core Java 21(+) JDK that runs a text-based menu interface ' +
            'through the console / terminal. Utilizes various data structures and OOP software design principles ' +
            'to handle serialization, game logic, and enforce the program\'s "self-learning" mechanism.',
        links: [
            { label: 'GitHub', href: 'https://github.com/j0ey-code/twenty-questions-java' },
        ],
    },
    {
        id: 'game-of-war',
        name: 'Game of "War!" Simulated in Java',
        meta: 'Java · Software Design · OOP · 2024',
        featured: false,
        description: (
            <>
                A basic recreation of the card game "War!", run in core Java.
                Utilizes simple object-oriented software design principles.
                Runs a simulation of the game in the console / terminal, <i>automatically</i>, when executed
                and prints all outputted results of each hand to the screen.
            </>
        ),
        links: [
            { label: 'GitHub', href: 'https://github.com/j0ey-code/game-of-war' },
        ],
    },
];
