/*
 * posts.js
 * Single source of truth for the blog listing.
 *
 * In the old site these five entries were written out as hand-authored
 * <a class="post-entry"> blocks in blog.html, and the first three were
 * ALSO written out a second time as <a class="preview-card"> blocks in
 * homepage.html -- same titles, same dates, same excerpt text, duplicated
 * word for word. Editing one meant remembering to edit the other.
 *
 * Now both pages read this array. Blog.jsx renders all of it; Home.jsx
 * renders `posts.slice(0, 3)`. One edit here updates both pages.
 *
 * Every post is a static HTML page served straight out of public/, so
 * each `href` is a plain path, not a React route. The papers that used
 * to link to their PDFs are now articles too; each one links back to its
 * original PDF from its own footer.
 *
 * `external: true` marks an entry that links somewhere off this site
 * (e.g. straight to a PDF) -- the components use it to decide whether
 * to open the link in a new tab. None currently do.
 */

export const posts = [
    {
        id: 'win-c-compilers',
        title: 'Installing a C/C++ Compiler on Windows',
        date: 'August 2026',
        href: '/win-c-compilers.html',
        external: false,
        excerpt:
            'A step-by-step guide to getting a full GCC toolchain running on a fresh ' +
            'Windows 11 or Windows 10 v22H2 install via MSYS2, plus the two alternatives ' +
            "worth knowing about: Microsoft's MSVC Build Tools, and GCC under WSL.",
    },
    {
        id: 'good-citizen',
        title: 'What It Means to be a Good Citizen In a Free and Fair State',
        date: 'June 2026',
        href: '/good-citizen.html',
        external: false,
        excerpt:
            'A humanities centered essay on the importance of civic virtue ' +
            'and sociopolitical obligation in a democratic nation.',
    },
    {
        id: 'yin-paper',
        title: 'YIN Algorithm Research Paper',
        date: 'May 2026',
        href: '/yin-algorithm.html',
        external: false,
        excerpt:
            'My research paper on the YIN algorithm, created by Cheveigne and ' +
            'Kawahara in 2002, exploring its improvements upon previous ' +
            'auto-correlation methods for pitch estimation, along with its ' +
            'significance in the world of digital signal processing methods.',
    },
    {
        id: 'tcp-ip',
        title: 'TCP/IP Technical Report',
        date: 'March 2026',
        href: '/tcp-ip-report.html',
        external: false,
        excerpt:
            'A technical report on how both the TCP/IP and ' +
            'OSI networking models function in practice.',
    },
];
