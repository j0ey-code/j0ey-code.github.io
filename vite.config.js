import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],

    /*
     * '/' is correct for a user site published at j0ey-code.github.io.
     * If this is ever deployed to a PROJECT repo instead -- i.e. served
     * from j0ey-code.github.io/some-repo/ -- this has to become
     * '/some-repo/', and the <BrowserRouter> in App.jsx needs a matching
     * basename="/some-repo". Getting one but not the other gives you a
     * page that loads its assets but routes to nothing, or vice versa.
     */
    base: '/',
});
