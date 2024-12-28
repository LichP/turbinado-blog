import matter from 'gray-matter'
import path from 'path'
import type { Post, Tag } from './types'
import { tagSlug, tagTitle } from './tag-data'
import fs from 'fs/promises'
import { cache } from 'react'

export const getPosts = cache(async () => {
    const posts = await fs.readdir('./posts/')
  
    return Promise.all(
        posts
        .filter((file) => path.extname(file) === '.mdx')
        .map(async (file) => {
            const filePath = `./posts/${file}`
            const postContent = await fs.readFile(filePath, 'utf8')
            const { data, content } = matter(postContent)

            if (data.published === false) {
                return null
            }

            return { ...data, body: content } as Post
        })
    ).then(
        posts => posts.filter(post => post !== null)
    )
})
  
export async function getPost(slug: string) {
    const posts = await getPosts()
    return posts.find((post) => post?.slug === slug)
}

export async function getPostsByTag(slug: string) {
    const posts = await getPosts()
    return posts.filter((post) => post?.tags.map((tag: Tag) => tagSlug(tag)).includes(slug))
}
  
export default getPosts
