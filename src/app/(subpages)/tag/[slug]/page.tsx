import getPosts, { getPost, getPostsByTag } from '@/lib/get-posts'
import type { Post, Tag } from '@/lib/types'
import { tagSlug, tagTitle } from '@/lib/tag-data'
import { notFound } from 'next/navigation'
import PostList from '@/components/layout/PostList'

export async function generateStaticParams() {
    const posts = await getPosts()
    return posts.reduce((tagSlugs: Array<{slug: string}>, post: Post) => {
        return [...tagSlugs, ...post.tags.map((tag: Tag) => ({slug: tagSlug(tag)}))]
    }, [])
}

async function getPostsByTagDateDesc(slug: string) {
    const posts = await getPostsByTag(slug)
    return posts.sort((a, b) => (b?.date.getTime() ?? 0) - (a?.date.getTime() || 0))
}

export default async function TagPage({
    params,
}: {
    params: {
        slug: string
    }
}) {
    const posts = await getPostsByTagDateDesc(params.slug)
    if (posts.length == 0) return notFound()
    const tag = posts[0].tags.find((tag) => tagSlug(tag) == params.slug)
    return (
        <main>
            <section className="space-y-4 my-4">
                <h1>Tag: {tagTitle(tag)}</h1>
                <PostList posts={posts} />
            </section>
        </main>
    )
}
