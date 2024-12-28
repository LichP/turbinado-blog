import getPosts from '@/lib/get-posts'
import { Metadata } from 'next'
import Link from 'next/link'
import TagLabel from '@/components/ui/TagLabel'

export const generateMetadata = async ({
    params,
}: {
    params: {
        slug: string
    }
}): Promise<Metadata> => {
    const post = (await getPosts()).find((p) => p?.slug === params.slug)
    return {
        title: post?.title,
        description: post?.description,
        alternates: {
            canonical: `https://blog.turbinado.co.uk/post/${params.slug}`,
        },
    }
}

async function getData({ slug }: { slug: string }) {
    const posts = await getPosts()
    const postIndex = posts.findIndex((p) => p?.slug === slug)
  
    if (postIndex === -1) {
        return {
            previous: null,
            next: null,
            title: 'Not Found',
            date: null,
            lastModified: null,
            tags: [],
        }
    }
  
    const post = posts[postIndex]

    const { ...rest } = post

    return {
        previous: posts[postIndex - 1] || null,
        next: posts[postIndex + 1] || null,
        ...rest,
    }
}

export default async function PostLayout({
    children,
    params,
}: {
    children: JSX.Element
    params: {
        slug: string
    }
}) {
    const { previous, next, title, date, lastModified, tags } = await getData(params)

    const publishedDate = date
        ? date.toLocaleDateString('en-GB', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : null
    const lastModifiedDate = lastModified
        ? lastModified.toLocaleDateString('en-GB', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : null

    return (
        <>
        <main>
            <article className="space-y-4">
                <h1>{title}</h1>
                {date ? (
                    <div className="flex gap-4 items-baseline font-bvs text-zinc-750 dark:text-zinc-400">
                        <span className="flex-none">{publishedDate}</span>
                        {lastModified ? (
                            <span className="text-sm">
                                (Last modified: {lastModifiedDate})
                            </span>
                        ) : null}
                    </div>
                ) : null}
                {tags && tags.length > 0 ? (
                    <ul className="list-none px-0 flex flex-wrap gap-x-4 gap-y-1.5 items-baseline font-bvs text-zinc-750 dark:text-zinc-400">
                        {tags.map((tag, index) => {
                            if (tag) {
                                return (
                                    <li key={index}>
                                        <TagLabel tag={tag} />
                                    </li>
                                )
                            }
                            else {
                                return null;
                            }
                        })}
                    </ul>
                ) : null}
                {children}
            </article>
        </main>
        { previous || next ? (
            <>
            <hr/>
            <nav>
                <h2 className="text-lg">More Posts</h2>
                {previous ? (
                    <div>
                        Previous: <Link href={`/post/${previous.slug}`}>{previous.title}</Link>
                    </div>
                ) : null}
                {next ? (
                    <div>
                        Next: <Link href={`/post/${next.slug}`}>{next.title}</Link>
                    </div>
                ) : null}
            </nav>
            </>
        ) : null}
        </>
    )
}
