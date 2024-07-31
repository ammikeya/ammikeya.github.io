import * as path from 'path';
import { defineConfig } from 'rspress/config';
import live2d from 'rspress-plugin-live2d';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AmMikeYa blog',
  description: 'amMikeYa blog',
  icon: "/logo.png",
  logo: {
    light: "/logo.png",
    dark: "/logo.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/ammikeya' },
    ],
  },
});
