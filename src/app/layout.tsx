import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import './globals.css'

const lato = Lato({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-lato',
})

const bitstreamVeraSans = localFont({
    src: [
        {
            path: './fonts/BitstreamVeraSans-Roman.woff2',
            weight: '400',
            style: 'normal,'
        },
        {
            path: './fonts/BitstreamVeraSans-Bold.woff2',
            weight: '700',
            style: 'normal,'
        },
    ],
    variable: '--font-bitstream-vera-sans'
})

export const metadata: Metadata = {
    title: {
        template: '%s | Turbinado',
        default: 'Turbinado',
    },
    description: 'The blog of Phil Stewart, a UK web developer and tech geek.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${lato.variable} ${bitstreamVeraSans.variable} font-sans bg-white text-zinc-950 dark:bg-zinc-900 dark:text-white leading-7`}>
                <div className="lg:container lg:mx-auto px-4 lg:max-w-screen-xl space-y-4">
                    {children}
                    <footer className="text-sm py-6 space-y-2">
                        <hr/>
                        <div className="">
                            Copyright 2024 <a href="mailto:phil.stewart@lichp.co.uk">Phil Stewart</a> | <a href="https://github.com/LichP/turbinado-blog">View source code on Github</a>
                        </div>
                    </footer>
                </div>
            </body>
            <Script strategy="afterInteractive" async src="https://eu.umami.is/script.js" data-website-id="d4053088-cc6a-4a3c-bcae-5dce7e7cf50e"></Script>
        </html>
    )
}
