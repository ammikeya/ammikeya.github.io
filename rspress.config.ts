import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AmMikeYa blog',
  description: 'amMikeYa blog',
  icon: "/logo.png", // 浏览器左上角角标的icon
  logo: { // 主页左上角的logo
    light: "/logo.png",
    dark: "/logo.png",
  },
  themeConfig: {
		nav: [
			{
				"text": "About Me",
				"link": "/hello/",
				"activeMatch": "/hello/"
			}
		],
		lastUpdated: true,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/ammikeya' },
    ],
  },
});
