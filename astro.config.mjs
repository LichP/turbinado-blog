// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://turbinado.co.uk',
    integrations: [
		expressiveCode({
			themes: ['dark-plus', 'light-plus'],
		}),
		mdx(),
		sitemap(),
	],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'BitstreamVeraSans',
            cssVariable: '--font-bitstream-vera-sans',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/BitstreamVeraSans-Roman.woff2'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/BitstreamVeraSans-Bold.woff2'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.fontsource(),
            name: "Lato",
            cssVariable: '--font-lato',
        }
    ],
	redirects: {
		"/post/faking-a-404-wuth-refit": "/post/faking-a-404-with-refit",
	}
});