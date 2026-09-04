/*
 * links.js
 * One place for the new-tab attribute pair, so `rel="noopener noreferrer"`
 * can never be forgotten on a link that opens in one. (A `target="_blank"`
 * without that rel hands the opened page a live reference back to this
 * one via window.opener.)
 *
 * Spread it onto an anchor: <a href={...} {...newTabProps(true)}>
 */
export function newTabProps(open) {
    return open ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
