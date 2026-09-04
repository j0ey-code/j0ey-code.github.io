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
 * `external: true` marks an entry that links straight to a PDF rather
 * than to a page on this site -- the components use it to decide whether
 * to open the link in a new tab.
 */

export const posts = [
    {
        id: 'win-c-compilers',
        title: 'Installing a C/C++ Compiler on Windows',
        date: 'August 2026',
        /* Still served as the original static HTML file out of public/,
           so this is a plain path, not a React route. */
        href: '/win-c-compilers.html',
        external: false,
        excerpt:
            'A step-by-step guide to getting a full GCC toolchain running on a fresh ' +
            'Windows 11 or Windows 10 v22H2 install via MSYS2, plus the two alternatives ' +
            "worth knowing about: Microsoft's MSVC Build Tools, and GCC under WSL.",
    },
    {
        id: 'pitch-poster',
        title: 'Project P.I.T.C.H. v0.1 Presentation',
        date: 'July 2026',
        href: '/assets/docs/posterPITCH_final.pdf',
        external: true,
        excerpt:
            'My poster presentation on the proof-of-concept behind my recent, still ongoing research work, including ' +
            'panels which highlight a few of the key "under the hood" mechanisms that I intend to drive the program with.',
    },
    {
        id: 'good-citizen',
        title: 'What It Means to be a Good Citizen In a Free and Fair State',
        date: 'June 2026',
        href: '/assets/docs/wimtbagciffs.pdf',
        external: true,
        excerpt:
            'A humanities centered essay on the importance of civic virtue ' +
            'and sociopolitical obligation in a democratic nation.',
    },
    {
        id: 'yin-paper',
        title: 'YIN Algorithm Research Paper',
        date: 'May 2026',
        href: '/assets/docs/yinPaper.pdf',
        external: true,
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
        href: '/assets/docs/tcp-ip_paper.pdf',
        external: true,
        excerpt:
            'A technical report on how both the TCP/IP and ' +
            'OSI networking models function in practice.',
    },
];
