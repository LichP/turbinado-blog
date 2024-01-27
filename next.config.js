const { text } = require('stream/consumers')
const { textSpanContainsTextSpan } = require('typescript')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
