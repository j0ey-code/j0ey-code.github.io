/*
 * post.js
 * Shared JavaScript for blog post / article pages.
 * Load it after site.js on any page that links post.css.
 */

/* ===========================
   COPY-TO-CLIPBOARD FOR CODE BLOCKS
   Injects a Copy button into every .code-block that wraps a
   <pre><code>. post.css positions and styles .copy-btn.
   =========================== */

(function () {
    /* navigator.clipboard only exists in secure contexts (https:// or
       localhost). On a plain http:// or file:// preview there is nothing
       to copy with, so no button is added rather than adding a dead one. */
    if (!navigator.clipboard) return;

    function initCopyButtons() {
        document.querySelectorAll('.code-block').forEach(function (block) {
            const code = block.querySelector('pre code');
            if (!code) return;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'copy-btn';
            btn.textContent = 'Copy';
            btn.setAttribute('aria-label', 'Copy code to clipboard');

            btn.addEventListener('click', function () {
                navigator.clipboard.writeText(code.innerText).then(function () {
                    btn.textContent = 'Copied';
                    btn.classList.add('is-copied');
                    setTimeout(function () {
                        btn.textContent = 'Copy';
                        btn.classList.remove('is-copied');
                    }, 1600);
                }).catch(function () {
                    btn.textContent = 'Press Ctrl+C';
                    setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
                });
            });

            block.appendChild(btn);
        });
    }

    /* Works whether the tag sits at the end of <body> (as it does now)
       or gets moved into <head> later. */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCopyButtons);
    } else {
        initCopyButtons();
    }
})();
